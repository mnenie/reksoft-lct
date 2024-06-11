<script setup lang="ts">
import { ref } from 'vue';
import { useInfiniteScroll } from '@vueuse/core';
import { usePostStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';
import type { IPost } from '@/types/post.interface';
import FeedCard from '@/components/feed/FeedCard.vue';
import FeedFilter from './FeedFilter.vue';
import SubmitPostForm from './SubmitPostForm.vue';


const el = ref<HTMLElement | null>(null);
const isFetching = ref<boolean>(false);

const postStore = usePostStore();
const { posts, filteredNotes } = storeToRefs(postStore);

async function onLoadMore() {
  isFetching.value = true;
  let newPosts: IPost[] = [];
  for (let i = 0; i < 15; i++) {
    const count = posts.value.length + i;
    const dummyData = await fetch('https://dummyjson.com/quotes/random').then((res) => res.json());
    // console.log(dummyData);
    newPosts.push({
      _id: count,
      title: `title ${count}`,
      tags: ["webdev", "help"],
      owner: { _id: '7', email: 'svo', tags: [] },
      text: `${dummyData.quote}\n(c) ${dummyData.author}`,
      img: ['800x600.png', 'fullhd.png', '150.png', '150.png'],
      attachment: [`file${count}.pdf`, `file${count}.pdf`],
      publishDate: new Date(),
      likeCount: 0,
      comments: []
    });
  }
  posts.value.push(...newPosts);
  isFetching.value = false;
}

useInfiniteScroll(el, onLoadMore, { distance: 10 });
</script>

<template>
  <div ref="el" class="scroll flex h-full w-full flex-col items-center space-y-3 overflow-y-auto">
    <FeedFilter />
    <SubmitPostForm v-if="postStore.showCreateForm" />
    <FeedCard v-for="post in filteredNotes" :key="post.title" :item="post" />
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
