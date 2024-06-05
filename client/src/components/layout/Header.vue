<script setup lang="ts">
import { Search } from 'lucide-vue-next';
import { Input } from '@/components/ui/input';
import { ref } from 'vue';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const search = ref('');
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
        <div class="flex items-center gap-1">
          <Avatar class="h-8 w-8">
            <AvatarFallback>1a</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  </div>
</template>
