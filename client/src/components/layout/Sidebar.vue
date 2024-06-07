<script setup lang="ts">
import { links, externalLinks } from '@/utils/consts';
import { Plus } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';
import Separator from '../ui/separator/Separator.vue';
import { redirect } from '@/helpers/helperRedirect';
</script>

<template>
  <div class="flex h-full min-w-[180px] flex-col gap-1 pb-4">
    <div
      class="mb-2 flex w-full cursor-pointer items-center justify-center rounded-xl bg-white px-3 py-2 pl-0 text-sm font-medium md:text-[13px]"
    >
      <Plus :size="18" class="mr-2 text-amber-400" />
      Добавить новость
    </div>
    <RouterLink
      v-for="link in links"
      :key="link.id"
      :to="link.path"
      class="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-zinc-200"
    >
      <div class="flex items-center">
        <component :is="link.icon" :size="16" class="mr-2 text-zinc-600" />
        <span class="text-sm md:text-[13px] 2xl:font-medium">{{ link.title }}</span>
      </div>
      <Badge v-if="link.label" variant="secondary" class="text-xs">
        {{ link.label }}
      </Badge>
    </RouterLink>
    <Separator />
    <div
      v-for="elink in externalLinks"
      :key="elink.id"
      class="flex cursor-pointer items-center justify-between rounded-md px-2 py-1.5 hover:bg-zinc-200"
      @click="redirect(elink.path)"
    >
      <div class="flex items-center">
        <component :is="elink.icon" :size="16" class="mr-2 text-zinc-600" />
        <span class="text-sm md:text-[13px] 2xl:font-medium">{{ elink.title }}</span>
      </div>
    </div>
  </div>
</template>
