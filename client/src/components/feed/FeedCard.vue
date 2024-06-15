<script setup lang="ts">
import type { IPost } from '@/types/post.interface';

import UserProfile from '../feed/card/UserProfile.vue';
import CardContent from '../feed/card/CardContent.vue';
import ActionsTab from '../feed/card/ActionsTab.vue';
import CommentSection from '../feed/card/CommentSection.vue';
import AttachmentContainer from '../feed/card/AttachmentContainer.vue';
import CardImages from '../feed/card/CardImages.vue';
import TagsTab from '../feed/card/TagsTab.vue';


const props = defineProps<{ 
  item: IPost;
}>();

</script>

<template>
  <div class="flex flex-col space-y-6 w-full border rounded-lg px-6 py-3 bg-white">
    <UserProfile :item="props.item" />
    <TagsTab :tags="props.item.tags" :type="props.item.postType" />
    <CardContent :item="props.item" />
    <CardImages v-if="props.item.img" :images="props.item.img" />
    <AttachmentContainer :files="item.attachment" />
    <ActionsTab :item="props.item" />
    <div class="border border-b-transparent border-t-gray-200"></div>
    <CommentSection :item="props.item" />
  </div>
</template>
