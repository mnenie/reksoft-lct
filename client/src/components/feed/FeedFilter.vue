<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import Input from '../ui/input/Input.vue';
import { useGptStore } from '@/stores/gpt';
import { computed, ref } from 'vue';
import { LoaderCircle } from 'lucide-vue-next';
import { ChevronDown } from 'lucide-vue-next';
import { ChevronUp } from 'lucide-vue-next';
import { marked } from 'marked';


const authStore = useAuthStore();
const gptStore = useGptStore();

const { user } = storeToRefs(authStore);
const filter = ref('');
const isPending = ref<boolean>(false);
const isLoaded = ref<boolean>(false);
const error = ref<boolean>(false);
const folded = ref<boolean>(true);
const responce = ref<string>("");
const responceMD = computed(() => {
  return marked.parse(responce.value)
})

const onSubmit = async () => {
  isPending.value = true;
  isLoaded.value = false;
  error.value = false;
  folded.value = false;
  try {
    responce.value = await gptStore.gptPostNews(filter.value);
    isPending.value = false;
    isLoaded.value = true;
  } catch (err) {
    isPending.value = false;
    error.value = true;
    console.log(err);
  }
};

</script>

<template>
  <div class="flex flex-col w-full items-center space-y-3 justify-between rounded-lg bg-white p-4">
    <div class="flex flex-row items-center w-full">
      <div class="flex w-full items-center gap-1">
        <Avatar class="h-7 w-7">
          <AvatarImage :src="user.userData && user.userData.photoUrl!" />
          <AvatarFallback>{{
            user.userData && user.userData.email && user.userData.email.slice(0, 2)
          }}</AvatarFallback>
        </Avatar>
        <Input
          v-model="filter"
          class="w-[90%] border-0 text-sm text-zinc-500 shadow-none outline-none focus-visible:ring-0 md:text-[13px]"
          placeholder="Воспользуйтесь умной фильтрацией"
        />
      </div>
      <Sparkles :size="18" class="cursor-pointer text-zinc-600 ml-auto" @click="onSubmit" />
    </div>
    <div v-if="isPending || isLoaded || error" class="flex w-full">
      <ChevronUp v-if="folded" class="h-4 w-4 ml-auto cursor-pointer" @click="folded = false" />
      <ChevronDown v-else class="h-4 w-4 ml-auto cursor-pointer" @click="folded = true" />
    </div>
    <div v-if="!folded" class="flex w-full border rounded-lg border-zinc-200">
      <div class="h-7 self-start my-3 px-3">
        <Avatar class="h-7 w-7">
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      </div>
      <div class="flex w-full justify-center items-center">
        <div v-if="isPending" class="flex items-center gap-2 pr-6">
          <span class="text-sm text-zinc-800">Загрузка</span>
          <LoaderCircle :size="19" class="animate-spin" />
        </div>
        <div v-if="error" class="text-sm mt-0 pr-6">:/ Не удалось получить ответ</div>
        <div v-if="isLoaded" class="mr-3 my-3 text-sm" v-html="responceMD">
        </div>
      </div>
    </div>
  </div>
</template>
