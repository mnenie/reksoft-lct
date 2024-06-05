<script setup lang="ts">
import type { Link } from '@/types/ui.interface';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface Props {
  links: Link[];
  isCollapsed: boolean;
}

defineProps<Props>();
</script>

<template>
  <nav
    class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2"
  >
    <p className="text-xs text-zinc-500 mb-3 pl-2">MENU</p>
    <template v-for="(link, index) of links">
      <Tooltip v-if="isCollapsed" :key="`1-${index}`" :delay-duration="0">
        <TooltipTrigger as-child>
          <RouterLink :to="link.path">
            <Button :variant="link.path === $route.path ? 'secondary' : 'ghost'">
              <component :is="link.icon" class="size-4" />
              <span class="sr-only">{{ link.title }}</span>
            </Button>
          </RouterLink>
        </TooltipTrigger>
        <TooltipContent side="right" class="flex items-center gap-4">
          {{ link.title }}
          <span v-if="link.label" class="ml-auto text-muted-foreground">
            {{ link.label }}
          </span>
        </TooltipContent>
      </Tooltip>

      <RouterLink v-else :key="`2-${index}`" :to="link.path">
        <Button
          :variant="link.path === $route.path ? 'secondary' : 'ghost'"
          class="flex w-full items-center justify-between"
        >
          <div class="flex items-center">
            <component :is="link.icon" class="mr-2 size-4" />
            <span class="md:text-sm lg:text-[14px]">{{ link.title }}</span>
          </div>
          <span v-if="link.label" class="md:text-sm lg:text-[13px]">
            {{ link.label }}
          </span>
        </Button>
      </RouterLink>
    </template>
  </nav>
</template>
