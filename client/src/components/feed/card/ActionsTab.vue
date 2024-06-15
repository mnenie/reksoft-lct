<script setup lang="ts">
import { ref, toRef } from 'vue';
import type { IPost } from '@/types/post.interface';

import { Button } from '@/components/ui/button';

import { Flame } from 'lucide-vue-next';
import { MessageSquare } from 'lucide-vue-next';
import { usePostStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  item: IPost;
}>();

const postStore = usePostStore();
const { isFire } = storeToRefs(postStore);

const likes = toRef(props.item.likeCount);
</script>

<template>
  <div class="mt-auto flex flex-row space-x-3">
    <Button
      :size="'sm'"
      class="space-x-1 rounded-xl bg-gray-100 text-black hover:bg-gray-200"
      @click="postStore.toggleLike(item)"
    >
      <Flame v-if="!isFire" :size="18" />
      <Flame v-else :size="18" stroke="#ff5300" fill="#ff8000" class="animate-flame-ignite" />
      <p class="text-sm">{{ likes }}</p>
    </Button>
    <Button :size="'sm'" class="space-x-1 rounded-xl bg-gray-100 text-black hover:bg-gray-200">
      <MessageSquare :size="18" />
      <p>{{ item.comments.length }}</p>
    </Button>
  </div>
</template>
