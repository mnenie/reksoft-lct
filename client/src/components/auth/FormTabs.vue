<script setup lang="ts">
import { cn } from '@/lib/utils';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, ROLE_ROUTE, TAGS_ROUTE } from '@/utils/consts';
import { reactive } from 'vue';

const tabs = reactive([
  { id: '0', route: ROLE_ROUTE },
  { id: '1', route: TAGS_ROUTE },
  { id: '2', route: REGISTRATION_ROUTE },
  { id: '3', route: LOGIN_ROUTE }
]);
</script>

<template>
  <div class="absolute -bottom-20 w-full flex items-center justify-center gap-4">
    <div
      v-for="tab in tabs"
      :key="tab.id"
      :class="cn('h-2 w-full rounded-sm', [tab.route === $route.path ? 'bg-amber-400' : 'bg-zinc-200'])"
    />
  </div>
</template>
