<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
</script>

<template>
  <div class="flex w-full items-center justify-between rounded-lg bg-white p-4">
    <div class="flex items-center gap-3">
      <Avatar class="h-7 w-7">
        <AvatarImage src="" />
        <AvatarFallback>1a</AvatarFallback>
      </Avatar>
      <span class="text-sm md:text-[13px] text-zinc-500">Воспользуйтесь умной фильтрацией</span>
    </div>
    <Sparkles :size="18" class="text-zinc-600 cursor-pointer" />
  </div>
</template>
