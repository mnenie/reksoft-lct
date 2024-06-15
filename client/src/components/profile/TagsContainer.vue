<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <div class="w-full rounded-lg bg-white px-6 py-5">
    <h2 class="mb-1 text-base font-bold">Ваши навыки</h2>
    <div class="mt-4 flex items-center gap-2">
      <div v-for="tag in user.userData.tags" :key="tag">
        <span
          class="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-zinc-700"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
