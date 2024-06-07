<script setup lang="ts">
import ChatBox from '@/components/chat/ChatBox.vue';
import PDFViewer from '@/components/chat/PDFViewer.vue';
</script>

<template>
  <div class="flex items-start gap-1 w-full h-full">
    <PDFViewer />
    <ChatBox />
  </div>
</template>
