<script setup lang="ts">
import ChatBox from '@/components/chat/ChatBox.vue';
import PDFViewer from '@/components/chat/PDFViewer.vue';
import { useGptStore } from '@/stores/gpt';
import { onMounted } from 'vue';

const chatStore = useGptStore()

onMounted(async () => {
  await chatStore.getFileGpt('666db3226b03e43e28d17bef')
})
</script>

<template>
  <div class="flex items-start gap-1 w-full h-full">
    <PDFViewer />
    <ChatBox />
  </div>
</template>
