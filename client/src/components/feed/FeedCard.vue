<script setup lang="ts">
import type { IPost } from '@/types/post.interface';

import UserProfile from '../feed/card/UserProfile.vue';
import CardContent from '../feed/card/CardContent.vue';
import ActionsTab from '../feed/card/ActionsTab.vue';
import CommentSection from '../feed/card/CommentSection.vue';


const props = defineProps<{ 
  item: IPost;
}>();

</script>

<template>
  <div class="flex flex-col space-y-6 w-full border rounded-lg px-6 py-3 bg-white">
    <UserProfile :item="props.item" />
    <CardContent :item="props.item" />
    <ActionsTab :item="props.item" />
    <div class="border border-b-transparent border-t-gray-200"></div>
    <CommentSection :item="props.item" />
  </div>
</template>
