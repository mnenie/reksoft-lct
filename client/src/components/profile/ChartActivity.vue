<script setup lang="ts">
import { AreaChart } from '@/components/ui/chart-area';
import useActivity from '@/composables/useActivity';
import { useAuthStore } from '@/stores/auth';
import type { Activity } from '@/types/ui.interface';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const activeData = ref<Activity[]>([]);

watch(
  () => user.value.posts,
  (newPosts) => {
    if (newPosts) {
      const { data } = useActivity(user.value.posts!);
      activeData.value = data.value;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="w-full max-w-[640px] rounded-lg bg-white px-6 py-5">
    <h2 class="text-lg font-bold">Активность на Reksoft</h2>
    <AreaChart :data="activeData" index="name" :categories="['news_per_month']" class="h-[340px]" />
  </div>
</template>
