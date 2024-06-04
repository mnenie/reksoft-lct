<script setup lang="ts">
import type { IPost } from '@/types/post.interface';
import { ref } from 'vue';
import FeedCard from '@/components/Feed/FeedCard.vue';
import { useInfiniteScroll } from '@vueuse/core'

const el = ref<HTMLElement | null>(null);

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

function onLoadMore() {
    let newPosts : IPost[] = [];
    for (let i = 0; i < 25; i++) {
        newPosts.push({ title: `title ${posts.value.length + i}`, text: "text 1" })
    }
    posts.value.push(...newPosts);
}

useInfiniteScroll(el, onLoadMore, {distance: 10})

</script>

<template>

    <div ref="el" class="scroll flex flex-col px-10 h-full items-center space-y-3 overflow-y-auto">
        <FeedCard v-for="post in posts" :key="post.title" :item="post" />
    </div>

</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.scroll::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>