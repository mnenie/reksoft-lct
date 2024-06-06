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
        <Avatar class="mr-2 size-12">
            <AvatarFallback>1a</AvatarFallback>
        </Avatar>
        <div class="flex flex-col">
            <p class="font-bold text-l">{{ props.item.owner.username }}</p>
            <p class=" text-sm text-slate-600">{{ item.publishDate.toLocaleDateString() }} 
                {{ item.publishDate.toLocaleTimeString() }}</p>
        </div>
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Ellipsis class="size-6 ml-auto mr-3 rounded-[50%] hover:bg-gray-200" />
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

</template>