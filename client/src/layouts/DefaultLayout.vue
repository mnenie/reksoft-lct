<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import MainContainer from '@/components/marketing/MainContainer.vue';
</script>

<template>
  <div class="h-dvh overflow-hidden bg-[#f3f3f1]">
    <Header />
    <div class="container mt-[70px] flex h-full w-full justify-between gap-8 px-32">
      <Sidebar />
      <slot />
      <MainContainer />
    </div>
  </div>
</template>
