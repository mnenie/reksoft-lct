<script setup lang="ts">
import { marked } from 'marked';
import { cn } from '@/lib/utils';
import type { ChatMessage } from '@/types/ui.interface';
import { computed, ref, watch } from 'vue';
import { scrollBottom } from '@/helpers/helperScroll';
import AvatarProvider from './AvatarProvider.vue';
import { AvatarImage, AvatarFallback } from '../ui/avatar';

const props = defineProps<{
  messages: ChatMessage[];
  isPending: boolean;
}>();

const container = ref<HTMLElement | null>(null);

const htmlMessages = computed(() => {
  scrollBottom(container!);
  return props.messages.map((message) => {
    return {
      ...message,
      text: marked.parse(message.text)
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
    <div ref="container" class="content relative flex h-[90%] flex-1 flex-col overflow-y-auto">
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
            <AvatarFallback>
              {{ message && message.role === 'user' ? 'al' : 'ai' }}
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
              src="https://www.shareicon.net/download/2016/06/19/603831_yandex_512x512.png"
            ></AvatarImage>
            <AvatarFallback> ai </AvatarFallback>
          </AvatarProvider>
          <div
            class="content_message flex items-center gap-2 text-[14px] md:text-[13px] 2xl:text-[14px]"
          >
            <span>is thinking</span>
            <div class="inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-zinc-200" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
