<script setup lang="ts">
import { links } from '@/utils/consts';
import { Plus } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <div class="flex h-full min-w-[180px] flex-col gap-3 pb-4">
    <div
      class="mb-2 flex w-full cursor-pointer items-center rounded-3xl bg-white px-3 py-1.5 text-sm font-medium"
    >
      <Plus :size="18" class="mr-2 text-amber-400" />
      Добавить новость
    </div>
    <RouterLink
      v-for="link in links"
      :key="link.id"
      :to="link.path"
      class="flex items-center justify-between rounded-md px-3 py-1 hover:bg-white"
    >
      <div class="flex items-center">
        <component :size="16" :is="link.icon" class="mr-2 text-zinc-600" />
        <span class="text-[14px] font-medium md:text-[13px] 2xl:text-[14px]">{{ link.title }}</span>
      </div>
      <Badge variant="secondary" v-if="link.label" class="text-xs">
        {{ link.label }}
      </Badge>
    </RouterLink>
  </div>
</template>
