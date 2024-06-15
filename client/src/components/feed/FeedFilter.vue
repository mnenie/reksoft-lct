<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import Input from '../ui/input/Input.vue';
import { AI_NEWS } from '@/utils/consts';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <div class="flex w-full items-center justify-between rounded-lg bg-white p-4">
    <div class="flex items-center gap-1 w-full">
      <Avatar class="h-7 w-7">
        <AvatarImage :src="user.userData && user.userData.photoUrl!" />
        <AvatarFallback>{{ user.userData && user.userData.email && user.userData.email.slice(0, 2) }}</AvatarFallback>
      </Avatar>
      <Input class="text-sm text-zinc-500 md:text-[13px] w-[90%] outline-none border-0 shadow-none focus-visible:ring-0" placeholder="Воспользуйтесь умной фильтрацией" />
    </div>
    <Sparkles :size="18" class="cursor-pointer text-zinc-600" @click="$router.push(AI_NEWS)" />
  </div>
</template>
