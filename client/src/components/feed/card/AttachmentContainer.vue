<script setup lang="ts">
import AttachmentItem from './AttachmentItem.vue';

const props = defineProps<{ 
  files: string[];
}>();

</script>

<template>

    <div class="py-1 space-y-2">
        <AttachmentItem v-for="file in props.files" :key="file" :file="file" />
    </div>

</template>