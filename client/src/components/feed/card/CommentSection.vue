<script setup lang="ts">
import { ref } from 'vue';
import type { IComment, IPost } from '@/types/post.interface';
import { usePostStore } from '@/stores/posts';

import PostComment from './PostComment.vue';
import { useTextareaAutosize } from '@vueuse/core'

import { SendHorizonal } from 'lucide-vue-next';
import { LoaderCircle } from 'lucide-vue-next';


const props = defineProps<{ 
  item: IPost;
}>();
const postStore = usePostStore();
const { textarea, input } = useTextareaAutosize()


const comments = ref<IComment[]>(props.item.comments);
const sendPending = ref<boolean>(false);

async function addComment(){
  sendPending.value = true;
  if (input.value){
    let newComment = {
      _id: (comments.value.length + 1).toString(),
      text: input.value
    } as IComment;
    const resp = await postStore.postComment(props.item, newComment);
    newComment = resp;
    comments.value.push(newComment);
    input.value = "";
  }
  sendPending.value = false;
}

</script>

<template>

  <div>
    <div>
      <PostComment v-for="comment in comments" :key="comment._id" :item="comment" class="flex flex-row space-x-1 px-3 py-1" />
    </div>
    <div class="flex flex-row space-x-3 mt-3">
      <textarea 
        ref="textarea" 
        v-model="input" 
        placeholder="Написать комментарий..."
        class="flex min-h-[40px] w-full rounded-md border border-input bg-transparent resize-none px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground text-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
      </textarea>
      <LoaderCircle v-if="sendPending" class="animate-spin mt-[8px]" />
      <SendHorizonal v-else-if="input" stroke="#374151" class="mt-[8px]" @click="addComment" />
      <SendHorizonal v-else stroke="#9ca3af" class="mt-[8px]" />
    </div>
  </div>

</template>

<style scoped>
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>