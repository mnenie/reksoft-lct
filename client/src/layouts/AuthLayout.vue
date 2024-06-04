<script setup lang="ts">
import BgContainer from '@/components/auth/BgContainer.vue';
</script>

<template>
  <div class="main_container relative flex w-full h-screen">
    <slot />
    <BgContainer />
  </div>
</template>
