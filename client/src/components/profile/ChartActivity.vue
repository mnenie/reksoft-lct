<script setup lang="ts">
import { AreaChart } from '@/components/ui/chart-area';
import useActivity from '@/composables/useActivity';
import { usePostStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';

const postStore = usePostStore();
const { posts } = storeToRefs(postStore);

// const { data } = useActivity(posts);
const data = [
  { name: 'Jan', news_per_month: 10 },
  { name: 'Feb', news_per_month: 2 },
  { name: 'Mar', news_per_month: 8 },
  { name: 'Apr', news_per_month: 4 },
  { name: 'May', news_per_month: 3 },
  { name: 'Jun', news_per_month: 2 },
  { name: 'Jul', news_per_month: 12 }
];
</script>

<template>
  <div class="w-full max-w-[640px] rounded-lg bg-white px-6 py-5">
    <h2 class="text-lg font-bold">Активность на Reksoft</h2>
    <AreaChart :data="data" index="name" :categories="['news_per_month']" class="h-[340px]" />
  </div>
</template>
