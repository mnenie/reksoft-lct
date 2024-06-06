<script setup lang="ts">
import type { IPost } from '@/types/post.interface';


const props = defineProps<{ 
  item: IPost;
}>();

</script>

<template>

    <div class="flex flex-col space-y-3 line">
        <h2 class="text-2xl font-bold">{{ props.item.title }}</h2>
        <p>{{ props.item.text }}</p>
    </div>

</template>