<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useInfiniteScroll } from '@vueuse/core';
import { usePostStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';
import type { IPost } from '@/types/post.interface';
import FeedCard from '@/components/feed/FeedCard.vue';
import FeedFilter from './FeedFilter.vue';
import SubmitPostForm from './SubmitPostForm.vue';

import { Button } from '@/components/ui/button';

import { LoaderCircle } from 'lucide-vue-next';

const limit = 15;
const skip = ref(10);

const el = ref<HTMLElement | null>(null);
const isFetching = ref<boolean>(false);
const noNewPosts = ref<boolean>(false);

const postStore = usePostStore();
const { posts, filteredNotes } = storeToRefs(postStore);

async function onLoadMore() {
  if (noNewPosts.value) return;

  isFetching.value = true;
  let newPosts: IPost[] = [];
  newPosts = await postStore.fetchPosts(limit, skip.value);

  if (newPosts.length === 0) {
    noNewPosts.value = true;
    setTimeout(() => {
      isFetching.value = false;
      return;
    }, 2000);
  } else {
    posts.value.push(...newPosts);
    skip.value += limit;
  }
  isFetching.value = false;
}

useInfiniteScroll(el, onLoadMore, { distance: 10 });

onMounted(() => {
  posts.value = [];
  skip.value = 0;
  noNewPosts.value = false;
});
</script>

<template>
  <div class="w-full space-y-3">
    <FeedFilter />
    <SubmitPostForm v-if="postStore.showCreateForm" />
    <div ref="el" class="scroll flex h-full w-full flex-col items-center space-y-3 overflow-y-auto">
      <FeedCard v-for="post in filteredNotes" :key="post.title" :item="post" />
      <div class="flex w-full flex-row items-center justify-center">
        <LoaderCircle v-if="isFetching" class="mb-[100px] mt-[100px] animate-spin" />
        <div v-else class="flex flex-col items-center">
          <p class="mb-1 mt-[100px]">Кажется, новости закончились =(</p>
          <Button class="mb-[100px]" @click="noNewPosts = false">Обновить</Button>
        </div>
      </div>
    </div>
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
