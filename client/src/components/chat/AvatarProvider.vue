<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';
</script>

<template>
  <Avatar
    size="sm"
    :class="
      cn(
        'inline-flex h-8 w-8 shrink-0 select-none items-center justify-center overflow-hidden bg-zinc-100 font-normal text-zinc-950'
      )
    "
  >
    <slot />
  </Avatar>
</template>