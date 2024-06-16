<script setup lang="ts">
import { ref, toRef } from 'vue';
import type { IPost } from '@/types/post.interface';
import { usePostStore } from '@/stores/posts';
import { useAuthStore } from '@/stores/auth';

import { Button } from '@/components/ui/button';

import { Flame } from 'lucide-vue-next';
import { MessageSquare } from 'lucide-vue-next';

const props = defineProps<{
  item: IPost;
}>();

const item = props.item;

const postStore = usePostStore();
const authStore = useAuthStore();

const isFire = ref<boolean>(false);
const likes = toRef(props.item.likeCount);

async function toggleLike() {
  if (isFire.value) {
    isFire.value = false;
    likes.value--;
    item.likeCount--;
    item.userLikes = item.userLikes.filter(l => l !== authStore.user.userData._id);
    console.log(item)
    await postStore.setUnlike(item);
    return;
  }
  isFire.value = true;
  likes.value++;
  item.likeCount++;
  item.userLikes.push(authStore.user.userData._id)
  await postStore.setLike(item);
}

if (item.userLikes.includes(authStore.user.userData._id)) {
  isFire.value = true;
}

</script>

<template>
  <div class="mt-auto flex flex-row space-x-3">
    <Button
      :size="'sm'"
      class="space-x-1 rounded-xl bg-gray-100 text-black hover:bg-gray-200"
      @click="toggleLike"
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
