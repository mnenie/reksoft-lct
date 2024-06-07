<script setup lang="ts">
import { ref } from 'vue';
import BotContent from './BotContent.vue';
import BotMessage from './BotMessage.vue';
import type { ChatMessage } from '@/types/ui.interface';

const model = ref('');
const isPending = ref(false);
const messages = ref<ChatMessage[]>([]);

const chatSubmit = () => {}
</script>

<template>
  <div class="transition-width relative h-full w-1/2 flex-col overflow-hidden bg-white">
    <BotContent :messages="messages" :is-pending="isPending" />
    <BotMessage v-model="model" @on-chat="chatSubmit" />
  </div>
</template>
