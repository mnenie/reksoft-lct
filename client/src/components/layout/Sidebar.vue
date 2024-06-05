<script setup lang="ts">
import AccountProvider from '../menu/AccountProvider.vue';
import Nav from '../menu/Nav.vue';
import type { Link } from '@/types/ui.interface';
import { Triangle } from 'lucide-vue-next';
import Separator from '../ui/separator/Separator.vue';

interface Props {
  isCollapsed: boolean;
  links: Link[];
}

defineProps<Props>();
</script>
<template>
  <div
    :data-collapsed="isCollapsed"
    class="group flex h-full flex-col justify-between gap-4 bg-zinc-50"
  >
    <div>
      <div v-if="!isCollapsed" class="flex items-center gap-1 pl-4 px-2 h-[46px]">
        <Triangle class="h-5 w-5" />
        <h1 class="text-lg font-medium">Reksoft</h1>
      </div>
      <div v-else class="flex items-center px-[22px] h-[46px]">
        <h1 class="text-lg font-medium">R</h1>
      </div>
      <Separator class="mb-6" />
      <Nav :links="links" :is-collapsed="isCollapsed" />
    </div>
    <AccountProvider :is-collapsed="isCollapsed" class="px-2" />
  </div>
</template>
