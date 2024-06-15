<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();
onMounted(async () => {
  await authStore.getCurrentUser();
  console.log(authStore.user)
});
</script>

<template>
  <div class="h-dvh overflow-hidden bg-zinc-100">
    <Header />
    <div class="container pt-[70px] flex h-full w-full justify-between gap-6 px-32">
      <Sidebar />
      <slot />
    </div>
  </div>
</template>
