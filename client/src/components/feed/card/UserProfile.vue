<script setup lang="ts">
import type { IPost } from '@/types/post.interface';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Ellipsis } from 'lucide-vue-next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const props = defineProps<{
  item: IPost;
}>();
</script>

<template>
  <div class="flex flex-row items-center">
    <Avatar class="mr-2 size-10">
      <AvatarFallback>1a</AvatarFallback>
    </Avatar>
    <div class="flex flex-col">
      <p class="text-base font-bold">{{ props.item.owner.email }}</p>
      <p class="text-sm md:text-[13px] text-zinc-500">
        {{ item.publishDate.toLocaleDateString() }} {{ item.publishDate.toLocaleTimeString() }}
      </p>
    </div>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Ellipsis class="ml-auto mr-3 size-5 rounded-md hover:bg-gray-200 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-[200px]">
        <DropdownMenuItem> Сохранить в закладках </DropdownMenuItem>
        <DropdownMenuItem> Пожаловаться </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
