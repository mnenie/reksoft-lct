<script setup lang="ts">
import { AreaChart } from '@/components/ui/chart-area';

const data = [
  { name: 'Jan', news_per_month: 10 },
  { name: 'Feb', news_per_month: 2 },
  { name: 'Mar', news_per_month: 1 },
  { name: 'Apr', news_per_month: 5 },
  { name: 'May', news_per_month: 6 },
  { name: 'Jun', news_per_month: 2 },
  { name: 'Jul', news_per_month: 3 }
];
</script>

<template>
  <div class="w-full rounded-lg bg-white px-6 py-5 max-w-[640px]">
    <h2 class="text-lg font-bold">Активность на Reksoft</h2>
    <AreaChart :data="data" index="name" :categories="['news_per_month']" class="h-[340px]" />
  </div>
</template>
