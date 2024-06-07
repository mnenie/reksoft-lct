<script setup lang="ts">
import { HOME_ROUTE } from '@/utils/consts';
import { ChevronLeft } from 'lucide-vue-next';
</script>

<template>
  <div class="relative h-dvh w-full overflow-hidden bg-zinc-100">
    <slot />
  </div>
</template>
