<script setup lang="ts">
import { ref } from 'vue';
import type { IPost } from '@/types/post.interface';

import { Button } from '@/components/ui/button';

import { Flame } from 'lucide-vue-next';
import { MessageSquare } from 'lucide-vue-next';
import { Forward } from 'lucide-vue-next';


const props = defineProps<{ 
  item: IPost;
}>();

const isFire = ref<boolean>(false);
const likes = ref<number>(props.item.likeCount);
const shares = ref<number>(props.item.shareCount);

function toggleLike() {
  isFire.value = !isFire.value
  if (isFire.value) {
    likes.value++;
    return;
  }
  likes.value--;
}

</script>

<template>

    <div class="flex flex-row space-x-3 mt-auto">
        <Button class="space-x-1 rounded-xl bg-gray-100 text-black hover:bg-gray-200" @click="toggleLike">
          <Flame v-if="!isFire" />
          <Flame v-else stroke="#ff5300" fill="#ff8000" class="animate-flame-ignite" />
          <p>{{ likes }}</p>
        </Button>
        <Button class="space-x-1 rounded-xl bg-gray-100 text-black hover:bg-gray-200">
          <MessageSquare />
          <p>{{ item.comments.length }}</p>
        </Button>
        <Button class="space-x-1 rounded-xl bg-gray-100 text-black hover:bg-gray-200" @click="shares++">
          <Forward />
          <p>{{ shares }}</p>
        </Button>
    </div>

</template>