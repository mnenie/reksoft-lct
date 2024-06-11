<script setup lang="ts">
import { ref } from 'vue';

import { File } from 'lucide-vue-next';
import { FileDown } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
import { CHAT_ROUTE } from '@/utils/consts';

const props = defineProps<{
  file: string;
}>();

const downloadHover = ref<boolean>(false);
</script>

<template>
  <div
    class="group flex h-12 w-full cursor-pointer flex-row items-center space-x-3 hover:text-gray-700"
    @mouseleave="downloadHover = false"
    @mouseenter="downloadHover = true"
    @click="$router.push(CHAT_ROUTE)"
  >
    <div class="flex size-10 items-center justify-center rounded-[50%] bg-gray-100">
      <FileDown v-if="downloadHover" :size="21" class="text-zinc-800" />
      <File v-else :size="21" class="text-zinc-800" />
    </div>
    <div class="flex flex-col">
      <p class="text-base">{{ props.file }}</p>
      <p class="text-sm text-gray-700 group-hover:text-gray-400">14кб</p>
    </div>
    <div class="basis-5/6">
      <ChevronRight :size="18" class="ml-auto transition duration-100 group-hover:translate-x-1" />
    </div>
  </div>
</template>
