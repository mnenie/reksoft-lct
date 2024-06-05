<script setup lang="ts">
import { cn } from '@/lib/utils';
import { ChevronsUpDown } from 'lucide-vue-next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '../ui/button';

defineProps<{
  isCollapsed: boolean;
}>();
</script>

<template>
  <div class="px-2 pb-2">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="flex h-9 w-full items-center justify-between px-2.5 py-1 lg:text-[13px] md:text-sm">
          <div class="mr-4 flex items-center">
            <Avatar class="mr-2 h-5 w-5">
              <AvatarFallback>1a</AvatarFallback>
            </Avatar>
            <span v-if="!isCollapsed" class="w-full overflow-hidden text-ellipsis whitespace-nowrap lg:text-[13px] md:text-sm">
              1alexpeshkov@gmail.com</span
            >
          </div>
          <ChevronsUpDown class="h-3 w-3 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-[250px]">
        <DropdownMenuLabel
          class="flex w-full items-center justify-between overflow-hidden text-ellipsis whitespace-nowrap"
        >
          1alexpeshkov@gmail.com
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
