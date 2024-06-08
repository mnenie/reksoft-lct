<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/auth';
import { useFileDialog } from '@vueuse/core';
import { storeToRefs } from 'pinia';

const { files, open, reset, onChange } = useFileDialog({
  accept: '.pdf',
  multiple: false
});

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

onChange(async () => {
  user.value.resume = URL.createObjectURL(files.value![0]) + '.pdf';
  await authStore.updateUser({ resume: user.value.resume! });
});
</script>

<template>
  <div class="w-full rounded-lg bg-white px-6 py-5">
    <h2 class="mb-1 text-base font-bold">Загрузите ваше резюме</h2>
    <span class="text-sm text-zinc-400"> Ваше резюме должно быть формата .pdf </span>
    <div class="mt-4 flex items-center gap-2">
      <Button variant="secondary" class="self-start" @click="open"> Загрузить</Button>
      <template v-if="user.resume && user.resume !== 'no resume'">
        <li v-for="file of 1" :key="file" class="list-none text-sm">
          {{ user.resume.slice(-12) }}
        </li>
      </template>
      <span v-else class="text-sm text-zinc-500">Файл не выбран.</span>
    </div>
  </div>
</template>
