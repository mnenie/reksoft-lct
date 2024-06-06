<script setup lang="ts">
import { links } from '@/utils/consts';
import { Plus } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <div class="flex h-full min-w-[180px] flex-col gap-3 pb-4">
    <div
      class="mb-2 flex w-full cursor-pointer items-center justify-center rounded-3xl bg-white px-3 pl-0 py-2 text-sm font-medium"
    >
      <Plus :size="18" class="mr-2 text-amber-400" />
      Добавить новость
    </div>
    <RouterLink
      v-for="link in links"
      :key="link.id"
      :to="link.path"
      class="flex items-center justify-between rounded-md px-3 py-1 hover:bg-zinc-200"
    >
      <div class="flex items-center">
        <component :is="link.icon" :size="16" class="mr-2 text-zinc-600" />
        <span class="text-[14px] font-medium md:text-[13px] 2xl:text-[14px]">{{ link.title }}</span>
      </div>
      <Badge v-if="link.label" variant="secondary" class="text-xs">
        {{ link.label }}
      </Badge>
    </RouterLink>
  </div>
</template>
