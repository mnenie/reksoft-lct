<script setup lang="ts">
import { ref } from 'vue';

import { File } from 'lucide-vue-next';
import { FileDown } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';

const props = defineProps<{ 
  file: string;
}>();

const downloadHover = ref<boolean>(false);

</script>

<template>

  <div 
    class="group flex flex-row w-full h-12 items-center space-x-3 hover:text-gray-700 cursor-pointer" 
    @mouseleave="downloadHover = false"
    @mouseenter="downloadHover = true"
    >
    <div class="flex items-center justify-around rounded-[50%] bg-gray-100 size-12">
      <FileDown v-if="downloadHover" />
      <File v-else />
    </div>
    <div class="flex flex-col"> 
      <p class="text-s">{{ props.file }}</p>
      <p class="text-sm text-gray-700 group-hover:text-gray-400">14кб</p>
    </div>
    <div class="basis-5/6">
      <ChevronRight class="ml-auto group-hover:translate-x-1 transition duration-100" />
    </div>
  </div>

</template>