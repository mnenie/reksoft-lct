<script setup lang="ts">
import type { IPost } from '@/types/post.interface';
import { ref } from 'vue';
import FeedCard from '@/components/Feed/FeedCard.vue';


const posts = ref<IPost[]>([
    {
        title: "title 1",
        text: "text 1"
    },
    {
        title: "title 1",
        text: "text 1"
    },
    {
        title: "title 1",
        text: "text 1"
    }
])

</script>

<template>

    <div class="flex flex-row">
        <FeedCard v-for="post in posts" :key="post.title" :item="post" />
    </div>

</template>