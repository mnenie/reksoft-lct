<script setup lang="ts">
import AccountProvider from '../menu/AccountProvider.vue';
import Nav from '../menu/Nav.vue';
import type { Link } from '@/types/ui.interface';
import { Triangle } from 'lucide-vue-next';

interface Props {
  isCollapsed: boolean;
  links: Link[];
}

defineProps<Props>();
</script>
<template>
  <div
    :data-collapsed="isCollapsed"
    class="group flex h-full flex-col justify-between gap-4 bg-zinc-50 px-2 py-2 data-[collapsed=true]:py-2"
  >
    <div>
      <div class="flex items-center py-1 gap-1 mb-6">
        <Triangle class="h-6 w-6" />
        <h1 class="text-xl font-medium">Reksoft</h1>
      </div>
      <Nav :links="links" :is-collapsed="isCollapsed" />
    </div>
    <AccountProvider :is-collapsed="isCollapsed" />
  </div>
</template>
