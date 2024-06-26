<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/auth';
import { useFileDialog } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const { files, open, reset, onChange } = useFileDialog({
  accept: 'image/*',
  multiple: false
});

const authStore = useAuthStore();
const { user, updateFl } = storeToRefs(authStore);
const localPhotoUrl = ref<string | null>(null);

onChange(async () => {
  const file = files.value![0];
  if (file) {
    localPhotoUrl.value = URL.createObjectURL(file);
    await authStore.updateUser({ photoUrl: localPhotoUrl.value });
  }
});
</script>

<template>
  <div class="mb-6 w-full rounded-lg bg-white px-6 py-5">
    <h2 class="mb-1 text-lg font-bold">Ваше фото профиля</h2>
    <p class="mb-6 text-sm text-zinc-400">Вы можете поменять фото профиля тут</p>
    <div class="flex w-full items-center gap-4">
      <img :src="user.userData && user.userData.photoUrl" class="h-28 w-28 rounded-full bg-zinc-100" />
      <div class="flex flex-col gap-1">
        <p class="mb-2 text-sm font-bold">Загрузите новое фото</p>
        <div class="mb-1 flex items-center gap-2">
          <Button variant="secondary" class="self-start" @click="open"> Выберите файл ... </Button>
          <template v-if="updateFl && user.userData.photoUrl">
            <p class="text-sm">
              Файл загружен: <span>{{ `${1} ${'файл'}` }}</span>
            </p>
            <li v-for="file in 1" :key="file" class="text-sm">
              {{ user.userData.photoUrl!.slice(-12) }}
            </li>
          </template>
          <span v-else class="text-sm text-zinc-500">Не выбран ни один файл.</span>
        </div>
        <span class="mb-4 text-sm text-zinc-400"
          >Идеальный размер изображения - 192 x 192px. Максимально допустимый размер файла - 200 КБ.</span
        >
        <Button
          variant="outline"
          class="self-start border-red-500 text-red-500 hover:bg-red-50 hover:text-red-500"
          @click="reset"
        >
          Удалить фото
        </Button>
      </div>
    </div>
  </div>
</template>
