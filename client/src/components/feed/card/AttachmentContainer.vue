<script setup lang="ts">
import type { IFile } from '@/types/post.interface';
import AttachmentItem from './AttachmentItem.vue';

const props = defineProps<{ 
  files: IFile[];
}>();

</script>

<template>

    <div class="py-1 space-y-2">
        <AttachmentItem v-for="file in props.files" :key="file.url" :file="file" />
    </div>

</template>