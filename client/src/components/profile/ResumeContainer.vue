<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/auth';
import { useFileDialog } from '@vueuse/core';
import { storeToRefs } from 'pinia';

const { files, open, onChange } = useFileDialog({
  accept: '.pdf',
  multiple: false
});

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

onChange(async () => {
  user.value.userData.resume = URL.createObjectURL(files.value![0]) + '.pdf';
  await authStore.updateUser({ resume: user.value.userData.resume! });
});
</script>

<template>
  <div class="w-full rounded-lg bg-white px-6 py-5">
    <h2 v-if="user.userData" class="mb-1 text-base font-bold">
      {{ user.userData.resume !== 'no resume' ? 'Ваше резюме загружено' : 'Загрузите ваше резюме' }}
    </h2>
    <span class="text-sm text-zinc-400"> Ваше резюме должно быть формата .pdf </span>
    <div class="mt-4 flex items-center gap-2">
      <Button v-if="user.userData && user.userData.resume == 'no resume'" variant="secondary" class="self-start" @click="open">
        Загрузить
      </Button>
      <div v-else>📄</div>
      <template v-if="user.userData && user.userData.resume && user.userData.resume !== 'no resume'">
        <li v-for="file of 1" :key="file" class="list-none text-sm">
          {{ user.userData.resume.slice(-12) }}
        </li>
      </template>
      <span v-else class="text-sm text-zinc-500">Файл не выбран.</span>
    </div>
  </div>
</template>
