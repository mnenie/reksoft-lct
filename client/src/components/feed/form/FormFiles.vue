<script setup lang="ts">
import { File } from 'lucide-vue-next';

const props = defineProps<{
  files: string[];
}>();

</script>

<template>

<div>
  <div 
  v-for="file in props.files" 
  :key="file" 
  class="group flex h-12 w-full cursor-pointer flex-row items-center space-x-3 hover:text-gray-700"
  >
    <div class="flex items-center justify-center rounded-full p-2 bg-gray-100">
      <File :size="19" class="text-zinc-800" />
    </div>
    <div class="flex flex-col">
      <p class="text-base">{{ file }}</p>
      <p class="text-sm text-gray-700 group-hover:text-gray-400">14кб</p>
    </div>
  </div>
</div>

</template>