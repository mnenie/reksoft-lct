<script setup lang="ts">
import { HOME_ROUTE } from '@/utils/consts';
import { ChevronLeft } from 'lucide-vue-next';
import { VuePDF, usePDF } from '@tato30/vue-pdf';
import type { TextLayerLoadedEventPayload } from '@tato30/vue-pdf';
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';
import { useGptStore } from '@/stores/gpt';
import { storeToRefs } from 'pinia';

const gptStore = useGptStore();
const { pdfContent, url } = storeToRefs(gptStore);

const { pdf, pages } = usePDF(url);

const onDataLoaded = (value: TextLayerLoadedEventPayload) => {
  const content = value.textContent?.items;
  const concatContent = `${content
    ?.concat()
    .map((item: any) => item.str)
    .join('\n')}`;
  pdfContent.value = concatContent;
};

const { width } = useWindowSize();

const pdfWidth = computed(() => {
  return width.value * 0.5;
});
</script>

<template>
  <div class="h-full w-3/5 overflow-auto bg-white">
    <div
      class="sticky top-0 z-50 w-full border-b border-[#e4e4e766]/40 bg-[#fff9]/95 px-8 py-3 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/60"
    >
      <div class="flex w-fit cursor-pointer items-center gap-1" @click="$router.push(HOME_ROUTE)">
        <ChevronLeft :size="20" />
        <span class="text-sm font-medium">Вернуться на главную</span>
      </div>
    </div>
    <div v-for="page in pages" :key="page">
      <VuePDF :pdf="pdf" :page="page" :text-layer="true" :width="pdfWidth" @text-loaded="onDataLoaded"/>
    </div>
  </div>
</template>
