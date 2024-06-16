<script setup lang="ts">
import { marked } from 'marked';
import { cn } from '@/lib/utils';
import type { ChatMessage } from '@/types/ui.interface';
import { computed, ref, watch } from 'vue';
import { scrollBottom } from '@/helpers/helperScroll';
import AvatarProvider from './AvatarProvider.vue';
import { AvatarImage, AvatarFallback } from '../ui/avatar';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  messages: ChatMessage[];
  isPending: boolean;
}>();

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const container = ref<HTMLElement | null>(null);
const avatarMessage = computed(() => {
  return (message: ChatMessage) => {
    return message && message.role === 'user' ? 'al' : 'ai';
  };
});
const avatarImage = computed(() => {
  return (message: ChatMessage) => {
    return message && message.role === 'user'
      ? user.value.userData.photoUrl!
      : 'https://img.helpnetsecurity.com/wp-content/uploads/2016/11/09105950/artificial_intelligence.jpg';
  };
});

const htmlMessages = computed(() => {
  scrollBottom(container!);
  return props.messages.map((message) => {
    return {
      ...message,
      text: marked.parse(message.text as string)
    };
  });
});

watch(
  () => props.messages,
  async () => {
    await scrollBottom(container!);
  }
);
</script>

<template>
  <div class="h-full">
    <div ref="container" class="content relative flex h-[90%] flex-1 flex-col overflow-y-auto px-6 pt-6">
      <div class="flex h-full flex-col gap-8">
        <div
          v-for="(message, index) in htmlMessages"
          :key="index"
          :class="
            cn(
              'flex items-center gap-4',
              message.role === 'user' ? 'flex-row-reverse' : '',
              index === htmlMessages.length - 1 && message.role === 'assistant' && 'pb-10'
            )
          "
        >
          <AvatarProvider>
            <AvatarImage :src="avatarImage(message)" />
            <AvatarFallback>
              {{ avatarMessage(message) }}
            </AvatarFallback>
          </AvatarProvider>
          <div
            class="content_message text-[14px] md:text-[13px] 2xl:text-[14px]"
            v-html="message && message.text"
          />
        </div>
        <div v-if="isPending" class="flex items-center gap-2 pb-10">
          <AvatarProvider>
            <AvatarImage
              src="https://img.helpnetsecurity.com/wp-content/uploads/2016/11/09105950/artificial_intelligence.jpg"
            ></AvatarImage>
            <AvatarFallback> ai </AvatarFallback>
          </AvatarProvider>
          <div class="content_message flex items-center gap-2 text-[14px] md:text-[13px] 2xl:text-[14px]">
            <span>is thinking</span>
            <div class="inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-zinc-200" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
