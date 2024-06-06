<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useFileDialog } from '@vueuse/core';
import { ref } from 'vue';

const { files, open, reset, onChange } = useFileDialog({
  accept: '.pdf',
  multiple: false
});
</script>

<template>
  <div class="w-full rounded-lg bg-white px-6 py-5">
    <h2 class="mb-1 text-base font-bold">Загрузите ваше резюме</h2>
    <span class="text-sm text-zinc-400"> Ваше резюме должно быть формата .pdf </span>
    <div class="mt-4 flex items-center gap-2">
      <Button variant="secondary" class="self-start" @click="open"> Загрузить</Button>
      <template v-if="files">
        <li v-for="file of files" :key="file.name" class="list-none text-sm">
          {{ file.name }}
        </li>
      </template>
      <span v-else class="text-sm text-zinc-500">Файл не выбран.</span>
    </div>
  </div>
</template>
