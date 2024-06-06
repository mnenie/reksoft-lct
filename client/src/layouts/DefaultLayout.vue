<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import Sidebar from '@/components/layout/Sidebar.vue';
</script>

<template>
  <div class="h-dvh overflow-hidden bg-zinc-100">
    <Header />
    <div class="container mt-[70px] flex h-full w-full justify-between gap-6 px-32">
      <Sidebar />
      <slot />
    </div>
  </div>
</template>
