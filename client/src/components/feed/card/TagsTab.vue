<script setup lang="ts">
import { NotebookText } from 'lucide-vue-next';


const props = defineProps<{
  type: string;
  tags: string[];
}>();

let postType : string;
if (props.type === "applicant") postType = "Резюме"
else if (props.type === "recruiter") postType = "Вакансия"
else postType = "Статья"

</script>

<template>
  <div class="space-y-3">
    <div class="flex flex-row space-x-1 items-center">
      <NotebookText :size="18" class="text-green-700" />
      <p class="text-sm text-green-700">{{ postType }}</p>
    </div>
    <div class="flex flex-row space-x-1 text-wrap flex-wrap items-center">
      <span
        v-for="tag in props.tags"
        :key="tag"
        class="inline-flex min-w-fit mt-1 items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-sm font-semibold text-zinc-700"
      >
        #{{ tag }}
      </span>
    </div>
  </div>
</template>
