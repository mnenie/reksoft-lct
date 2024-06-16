<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import Input from '../ui/input/Input.vue';
import { useGptStore } from '@/stores/gpt';
import { ref } from 'vue';

const authStore = useAuthStore();
const gptStore = useGptStore();

const { user } = storeToRefs(authStore);
const filter = ref('');

const onSubmit = async () => {
  await gptStore.gptPostNews(filter.value);
};
</script>

<template>
  <div class="flex w-full items-center justify-between rounded-lg bg-white p-4">
    <div class="flex w-full items-center gap-1">
      <Avatar class="h-7 w-7">
        <AvatarImage :src="user.userData && user.userData.photoUrl!" />
        <AvatarFallback>{{
          user.userData && user.userData.email && user.userData.email.slice(0, 2)
        }}</AvatarFallback>
      </Avatar>
      <Input
        v-model="filter"
        class="w-[90%] border-0 text-sm text-zinc-500 shadow-none outline-none focus-visible:ring-0 md:text-[13px]"
        placeholder="Воспользуйтесь умной фильтрацией"
      />
    </div>
    <Sparkles :size="18" class="cursor-pointer text-zinc-600" @click="onSubmit" />
  </div>
</template>
