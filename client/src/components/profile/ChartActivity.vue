<script setup lang="ts">
import { AreaChart } from '@/components/ui/chart-area';

const data = [
  { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Apr', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'May', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jun', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jul', total: Math.floor(Math.random() * 2000) + 500 }
];
</script>

<template>
  <div class="w-full rounded-lg bg-white px-6 py-5 max-w-[640px]">
    <h2 class="text-lg font-bold">Активность на Reksoft</h2>
    <AreaChart :data="data" index="name" :categories="['total']" class="h-[340px]" />
  </div>
</template>
