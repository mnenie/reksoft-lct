<script setup lang="ts">
import { ref } from 'vue';
import { cn } from '@/lib/utils';
import { User } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/utils/consts';
import type { RoleCard } from '@/types/user.interface';
import { useAuthStore } from '@/stores/auth';

const options = ref<RoleCard[]>([
  {
    id: 0,
    active: true,
    title: 'Я рекрутер',
    description: 'Настройка моей учетной записи для моей компании',
    role: 'recruiter'
  },
  { id: 1, active: false, title: 'Я соискатель', description: 'В поисках работы', role: 'applicant' }
]);

const authStore = useAuthStore();

const toggleCard = (id: number) => {
  options.value.map((card, i) => {
    card.active = i === id;
    card.active && authStore.setRole(card.role);
  });
};
</script>

<template>
  <form @submit.prevent="$router.push(REGISTRATION_ROUTE)">
    <div class="grid gap-6">
      <div class="grid gap-4">
        <div
          v-for="card in options"
          :key="card.id"
          :class="
            cn('relative w-full cursor-pointer rounded-sm border p-2', [
              card.active ? 'border-amber-300' : 'border-zinc-200'
            ])
          "
          @click="toggleCard(card.id)"
        >
          <div class="flex items-center gap-2">
            <div
              :class="
                cn('flex h-12 w-12 items-center justify-center rounded-sm border', [
                  card.active ? 'border-amber-300' : 'border-zinc-200'
                ])
              "
            >
              <User :size="24" :class="[card.active ? 'text-amber-400' : 'text-zinc-800']" />
            </div>
            <div class="flex flex-col">
              <p class="text-sm font-medium text-zinc-700">{{ card.title }}</p>
              <span class="text-xs text-zinc-500">{{ card.description }}</span>
            </div>
          </div>
          <div v-if="card.active" class="absolute right-2 top-2 h-3 w-3 rounded-full bg-amber-400"></div>
        </div>
      </div>
      <div class="grid gap-2">
        <Button type="submit"> Продолжить </Button>
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
    </div>
  </form>
</template>
