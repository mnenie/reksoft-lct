<script setup lang="ts">
import { Search } from 'lucide-vue-next';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import AvatarImage from '../ui/avatar/AvatarImage.vue';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { usePostStore } from '@/stores/posts';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useOnline } from '@vueuse/core';

const online = useOnline();

const authStore = useAuthStore();
const postStore = usePostStore();
const { user } = storeToRefs(authStore);
const { search } = storeToRefs(postStore);
</script>

<template>
  <div class="fixed w-full bg-white py-2.5">
    <div class="container flex items-center justify-between px-32">
      <div class="flex items-center gap-1">
        <img src="https://www.reksoft.ru/wp-content/uploads/2019/05/logo.png" alt="reksoft" class="w-28" />
      </div>
      <div class="flex items-center gap-3">
        <div class="rounded-full bg-zinc-100">
          <div class="relative rounded-full">
            <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input v-model="search" placeholder="Найти на сайте" class="h-8 w-[170px] rounded-full pl-9" />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Avatar class="h-8 w-8">
              <AvatarImage :src="user && user.photoUrl!" />
              <AvatarFallback>{{ user && user.email && user.email.slice(0, 2) }}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel
              v-if="user"
              class="flex w-full items-center justify-between overflow-hidden text-ellipsis whitespace-nowrap gap-6"
            >
              {{ user.email }}
              <div v-if="online" class="h-2 w-2 rounded-full bg-green-600"></div>
              <div v-else class="h-2 w-2 rounded-full bg-amber-500"></div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="authStore.logout">
              <span>Выйти</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>
</template>
