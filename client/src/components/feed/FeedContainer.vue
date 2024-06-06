<script setup lang="ts">
import type { IPost } from '@/types/post.interface';
import { ref } from 'vue';
import FeedCard from '@/components/feed/FeedCard.vue';
import PreviewItem from './PreviewItem.vue';
import { useInfiniteScroll } from '@vueuse/core';

const el = ref<HTMLElement | null>(null);
const isFetching = ref<boolean>(false);

const posts = ref<IPost[]>([]);

async function onLoadMore() {
  isFetching.value = true;
  let newPosts: IPost[] = [];
  for (let i = 0; i < 15; i++) {
    const count = posts.value.length + i;
    const dummyData = await fetch('https://dummyjson.com/quotes/random').then((res) => res.json());
    // console.log(dummyData);
    newPosts.push({
      id: count,
      title: `title ${count}`,
      owner: { id: 7, username: 'svo' },
      text: `${dummyData.quote}\n(c) ${dummyData.author}`,
      img: [],
      attachment: [`file${count}.pdf`],
      publishDate: new Date()
    });
  }
  posts.value.push(...newPosts);
  isFetching.value = false;
}

useInfiniteScroll(el, onLoadMore, { distance: 10 });
</script>

<template>
  <div ref="el" class="scroll flex h-full flex-col items-center space-y-3 overflow-y-auto">
    <FeedCard v-for="post in posts" :key="post.title" :item="post" />
  </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
