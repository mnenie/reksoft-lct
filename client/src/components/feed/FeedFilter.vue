<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <div class="flex w-full items-center justify-between rounded-lg bg-white p-4">
    <div class="flex items-center gap-3">
      <Avatar class="h-7 w-7">
        <AvatarImage :src="user.photoUrl!" />
        <AvatarFallback>{{ user && user.email && user.email.slice(0, 2) }}</AvatarFallback>
      </Avatar>
      <span class="text-sm text-zinc-500 md:text-[13px]">Воспользуйтесь умной фильтрацией</span>
    </div>
    <Sparkles :size="18" class="cursor-pointer text-zinc-600" />
  </div>
</template>
