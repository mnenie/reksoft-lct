<script setup lang="ts">
import { SendHorizontal } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const emits = defineEmits<{
  (e: 'onChat'): void;
}>();
const message = defineModel<string>();
</script>

<template>
  <div class="sticky bottom-0 z-50 flex w-full flex-col items-center justify-end px-6">
    <div class="flex w-full items-center">
      <form class="relative flex w-full items-center" @submit.prevent="emits('onChat')">
        <Input
          v-model="message"
          :placeholder="'Привет! Чем могу помочь?'"
          class="rounded-none rounded-l-md border-r-0 focus-visible:ring-0"
        />
        <Button type="submit" variant="secondary" class="rounded-none rounded-r-md border border-zinc-200">
          <SendHorizontal :size="18" class="text-zinc-800" />
        </Button>
      </form>
    </div>
    <span class="py-1 text-xs text-zinc-400">
      Reksoft AI поможет вам найти и проанализировать любую инофрмацию.
    </span>
  </div>
</template>
