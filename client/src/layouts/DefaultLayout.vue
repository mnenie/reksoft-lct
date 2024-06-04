<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue';
import MainContainer from '@/components/marketing/MainContainer.vue';
</script>

<template>
  <div class="flex h-dvh w-full">
    <Sidebar />
    <div class="flex justify-between w-full">
      <slot />
      <MainContainer />
    </div>
  </div>
</template>
