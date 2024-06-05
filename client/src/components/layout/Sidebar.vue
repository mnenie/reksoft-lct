<script setup lang="ts">
import { links } from '@/utils/consts';
import { Plus } from 'lucide-vue-next';
</script>

<template>
  <div class="flex h-full min-w-[180px] flex-col gap-4 pb-4 pl-1">
    <div class="flex items-center rounded-3xl bg-white px-3 py-1.5 text-sm font-medium w-full">
      <Plus :size="18" class="text-amber-400 mr-2" />
      Добавить новость
    </div>
    <RouterLink
      v-for="link in links"
      :key="link.id"
      :to="link.path"
      class="flex items-center justify-between"
    >
      <div class="flex items-center">
        <component :is="link.icon" class="mr-2 size-4 text-zinc-600" />
        <span class="font-medium md:text-sm lg:text-[14px]">{{ link.title }}</span>
      </div>
      <span v-if="link.label" class="md:text-sm lg:text-[13px]">
        {{ link.label }}
      </span>
    </RouterLink>
  </div>
</template>
