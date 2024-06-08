<script setup lang="ts">
import type { IComment } from '@/types/post.interface';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const props = defineProps<{
  item: IComment;
}>();
</script>

<template>
  <div class="flex items-start gap-1">
    <Avatar class="size-9">
      <AvatarFallback>1a</AvatarFallback>
    </Avatar>
    <div class="flex flex-col space-y-1">
      <p class="font-bold">{{ props.item.owner.email }}</p>
      <p class="text-sm" >{{ props.item.text }}</p>
      <p class="text-sm md:text-[13px] text-zinc-600">
        {{ props.item.publishDate.toLocaleDateString() }} {{ props.item.publishDate.toLocaleTimeString() }}
      </p>
    </div>
  </div>
</template>
