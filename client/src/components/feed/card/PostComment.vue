<script setup lang="ts">
import type { IComment } from '@/types/post.interface';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';


const props = defineProps<{ 
  item: IComment;
}>();

</script>

<template>

    <div>
        <Avatar class="size-10">
          <AvatarFallback>1a</AvatarFallback>
        </Avatar>
        <div class="flex flex-col space-y-1">
          <p class="font-bold">{{ props.item.owner.username }}</p>
          <p>{{ props.item.text }}</p>
        <p class="text-sm text-slate-600">{{ props.item.publishDate.toLocaleDateString() }}
          {{ props.item.publishDate.toLocaleTimeString() }}</p>
        </div>
    </div>

</template>