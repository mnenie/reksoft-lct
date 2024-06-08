<script setup lang="ts">
import type { IPost } from '@/types/post.interface';

const props = defineProps<{
  item: IPost;
}>();
</script>

<template>
  <div class="line flex flex-col space-y-3">
    <h2 class="text-xl font-bold">{{ props.item.title }}</h2>
    <p class="text-sm">{{ props.item.text }}</p>
  </div>
</template>
