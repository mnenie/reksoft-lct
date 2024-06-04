<script setup lang="ts">
import type { IPost } from '@/types/post.interface';

const props = defineProps<{
  item: IPost
}>()

</script>

<template>

    <div class="h-60 w-40 border">
        <h3>{{ props.item.title }}</h3>
        <p>{{ props.item.text }}</p>
    </div>

</template>