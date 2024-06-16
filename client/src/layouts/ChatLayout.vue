<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();
onMounted(async () => {
  await authStore.getCurrentUser();
});
</script>

<template>
  <div class="relative h-dvh w-full overflow-hidden bg-zinc-100">
    <slot />
  </div>
</template>
