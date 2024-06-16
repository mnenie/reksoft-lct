<script setup lang="ts">
import { ref } from 'vue';
import BotContent from './BotContent.vue';
import BotMessage from './BotMessage.vue';
import type { ChatMessage } from '@/types/ui.interface';
import { useGptStore } from '@/stores/gpt';

const model = ref('');
const isPending = ref(false);
const messages = ref<ChatMessage[]>([]);

const gptStore = useGptStore();

const chatSubmit = async () => {
  try {
    isPending.value = true;
    const userMessage: { role: 'user'; text: string } = { role: 'user', text: model.value };
    messages.value.push(userMessage);
    const response = await gptStore.gptChat(model.value);
    messages.value.push(response);
    model.value = '';
  } catch (err) {
    console.log(err);
  } finally{
    isPending.value = false;
  }
}
</script>

<template>
  <div class="transition-width relative h-full w-1/2 flex-col overflow-hidden bg-white">
    <BotContent :messages="messages" :is-pending="isPending" />
    <BotMessage v-model="model" @on-chat="chatSubmit" />
  </div>
</template>
