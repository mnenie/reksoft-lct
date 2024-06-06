<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>
<template>
  <div class="flex flex-col gap-4">
    <div class="flex h-fit w-[300px] min-w-[300px] flex-col gap-2 rounded-md bg-white p-4">
      <h2 class="text-base font-bold">Добро пожаловать в Reksoft!</h2>
      <p class="text-sm text-zinc-700">
        Наслаждайтесь нашим сервисом с ИИ, который имеет функционал коммуникационной площадки,
        автоматизирующей ключевые этапы рекрутингового процессинга.
      </p>
    </div>
    <div class="flex h-fit w-[300px] min-w-[300px] flex-col gap-2 rounded-md bg-white p-4">
      <h2 class="text-base font-bold">Узнайте больше о проекте</h2>
      <Button variant="secondary" class="w-full">
        <img src="/github.png" class="w-4 h-4 mr-2" />
        GitHub
      </Button>
    </div>
  </div>
</template>
