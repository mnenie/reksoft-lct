<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue'
</script>

<template>
  <div class="flex h-dvh w-full">
    <Sidebar />
    <slot />
  </div>
</template>
