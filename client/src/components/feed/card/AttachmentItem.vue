<script setup lang="ts">
import { ref } from 'vue';
import { File } from 'lucide-vue-next';
import { FileDown } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
import type { IFile } from '@/types/post.interface';

const props = defineProps<{
  file: IFile;
}>();

const downloadHover = ref<boolean>(false);
</script>

<template>
  <div
    class="group flex h-12 w-full cursor-pointer flex-row items-center space-x-3 hover:text-gray-700"
    @mouseleave="downloadHover = false"
    @mouseenter="downloadHover = true"
    @click="$router.push(`/chat/${file._id}`)"
  >
    <div class="flex size-10 min-w-[40px] items-center justify-center rounded-[50%] bg-gray-100">
      <FileDown v-if="downloadHover" :size="21" class="text-zinc-800" />
      <File v-else :size="21" class="text-zinc-800" />
    </div>
    <div class="flex w-full flex-col">
      <p class="text-base">{{ props.file.name }}</p>
      <p class="text-sm text-gray-700 group-hover:text-gray-400">{{ Math.round(file.size / 1024) }} Кб</p>
    </div>
    <div>
      <ChevronRight :size="18" class="ml-auto transition duration-100 group-hover:translate-x-1" />
    </div>
  </div>
</template>
