<script setup lang="ts">
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/utils/consts';
import FormTabs from './FormTabs.vue';
import { Triangle } from 'lucide-vue-next';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const description = computed(() => {
  if(route.path === LOGIN_ROUTE){
    return 'Введите свои данные ниже, чтобы войти в свою учетную запись'
  } else if(route.path === REGISTRATION_ROUTE){
    return 'Введите свои данные ниже, чтобы создать учетную запись'
  }
  else {
    return 'Расскажите нам о себе! Выберите, кем вы являетесь в Reksoft'
  }
})
</script>

<template>
  <div class="container relative h-full w-8/12">
    <div class="mx-auto flex h-full w-full flex-col items-center justify-center">
      <div class="absolute left-8 top-6 flex items-center justify-center gap-1">
        <Triangle class="h-6 w-6" />
        <h1 class="text-xl font-medium">Reksoft</h1>
      </div>
      <div class="relative flex w-[460px] flex-col space-y-2 h-[360px]">
        <h2 className="md:text-4xl font-bold">
          {{ $route.path === LOGIN_ROUTE ? 'Добро пожаловать' : 'Регистрация' }}
        </h2>
        <p class="pb-4 text-sm text-[#72717a] dark:text-zinc-200">
         {{ description }}
        </p>
        <slot />
        <FormTabs />
      </div>
    </div>
  </div>
</template>
