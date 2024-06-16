<script setup lang="ts">
import { ref } from 'vue';
import { usePostStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';
import { redirect } from '@/helpers/helperRedirect';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const postStore = usePostStore();
const { typeSearch } = storeToRefs(postStore);

const checkedApplicant = ref<boolean>(true);

function handleCheck(type: string) {
  if (typeSearch.value.includes(type)){
    typeSearch.value = typeSearch.value.filter(t => t !== type)
    return;
  }
  typeSearch.value.push(type);
}

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
      <div class="flex items-center justify-between">
        <Label for="applicant">📝 Показать только резюме</Label>
        <Switch 
          id="applicant" 
          :checked="checkedApplicant" 
          @update:checked="handleCheck('applicant'); checkedApplicant = !checkedApplicant" 
          />
      </div>
    </div>
    <div class="flex h-fit w-[300px] min-w-[300px] flex-col gap-2 rounded-md bg-white p-4">
      <h2 class="text-base font-bold">Узнайте больше о проекте</h2>
      <Button variant="secondary" class="w-full" @click="redirect('https://github.com/mnenie/reksoft-lct')">
        <img src="/github.png" class="w-4 h-4 mr-2" />
        GitHub
      </Button>
    </div>
  </div>
</template>
