<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useFileDialog } from '@vueuse/core';
import { ref } from 'vue';

const { files, open, reset, onChange } = useFileDialog({
  accept: 'image/*',
  multiple: false
});

const img = ref('/account.jpg');
</script>

<template>
  <div class="w-full rounded-lg bg-white px-6 py-5 mb-6">
    <h2 class="mb-1 text-lg font-bold">Ваше фото профиля</h2>
    <p class="mb-6 text-sm text-zinc-400">Вы можете поменять фото профиля тут</p>
    <div class="flex w-full items-center gap-4">
      <img :src="img" class="h-28 w-28 rounded-full" />
      <div class="flex flex-col gap-1">
        <p class="mb-2 text-sm font-bold">Загрузите новое фото</p>
        <div class="mb-1 flex items-center gap-2">
          <Button variant="secondary" class="self-start" @click="open"> Выберите файл ... </Button>
          <template v-if="files">
            <p class="text-sm">
              Файл загружен: <span>{{ `${files.length} ${'файл'}` }}</span>
            </p>
            <li v-for="file of files" :key="file.name" class="text-sm">
              {{ file.name }}
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
