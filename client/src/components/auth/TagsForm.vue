<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/utils/consts';
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText
} from '@/components/ui/tags-input';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();

const { tags } = storeToRefs(authStore);
</script>
<template>
  <p class="pb-1 text-xs text-[#72717a]">
    Начните писать свой навык и нажмите 'Enter', чтобы навык записался в ваши существующие навыки
  </p>
  <TagsInput v-model="tags">
    <TagsInputItem v-for="item in tags" :key="item" :value="item">
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>
    <TagsInputInput placeholder="Поделитесь своими навыками..." />
  </TagsInput>
  <div class="grid gap-2 pt-4">
    <Button @click="$router.push(REGISTRATION_ROUTE)"> Продолжить </Button>
    <p class="text-center text-sm text-[#72717a] dark:text-zinc-300">
      Уже есть аккаунт?
      <span
        class="cursor-pointer underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-300/80"
        @click="$router.push(LOGIN_ROUTE)"
      >
        Войдите
      </span>
    </p>
  </div>
</template>
