<script setup lang="ts">
import ChatBox from '@/components/chat/ChatBox.vue';
import PDFViewer from '@/components/chat/PDFViewer.vue';
import { useGptStore } from '@/stores/gpt';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const chatStore = useGptStore();
const route = useRoute();

onMounted(async () => {
  await chatStore.getFileGpt(route.params.id as string);
});
</script>

<template>
  <div class="flex h-full w-full items-start gap-1">
    <PDFViewer />
    <ChatBox />
  </div>
</template>
