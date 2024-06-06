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
  <div class="h-fit min-h-80 w-full border rounded-lg p-3 bg-white">
    <div class="flex flex-row items-center mb-3">
      <Avatar class="mr-2 size-10">
        <AvatarFallback>1a</AvatarFallback>
      </Avatar>
      <div class="flex flex-col">
        <p>{{ item.owner.username }}</p>
        <p class=" text-sm text-slate-600">{{ item.publishDate.toLocaleDateString() }} {{
          item.publishDate.toLocaleTimeString() }}</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Ellipsis class="size-6 ml-auto" />
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-[200px]">
          <DropdownMenuItem>
            Сохранить в закладках
          </DropdownMenuItem>
          <DropdownMenuItem>
            Пожаловаться
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div class="flex flex-col space-y-3 px-3 line">
      <h2 class="text-2xl font-bold">{{ props.item.title }}</h2>
      <p class="max-w-[90%]">{{ props.item.text }}</p>
    </div>
  </div>
</template>
