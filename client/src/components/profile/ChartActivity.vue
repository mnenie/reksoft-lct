<script setup lang="ts">
import { AreaChart } from '@/components/ui/chart-area';
import useActivity from '@/composables/useActivity';
import { usePostStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';

const postStore = usePostStore();
const { posts } = storeToRefs(postStore);

const { data } = useActivity(posts);
</script>

<template>
  <div class="w-full max-w-[640px] rounded-lg bg-white px-6 py-5">
    <h2 class="text-lg font-bold">Активность на Reksoft</h2>
    <AreaChart :data="data" index="name" :categories="['news_per_month']" class="h-[340px]" />
  </div>
</template>
