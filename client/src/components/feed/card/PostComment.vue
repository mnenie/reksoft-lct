<script setup lang="ts">
import type { IComment } from '@/types/post.interface';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const props = defineProps<{
  item: IComment;
}>();

let date = new Date(props.item.createdAt || "");
const owner = props.item.owner!;

</script>

<template>
  <div class="flex items-start gap-1">
    <Avatar class="size-9">
      <AvatarImage v-if="owner" :src="owner.photoUrl!"></AvatarImage>
      <AvatarFallback v-if="owner">{{ owner.email.slice(1, 3) }}</AvatarFallback>
    </Avatar>
    <div class="flex flex-col space-y-1">
      <p v-if="owner" class="font-bold">{{ owner.email.slice(0, owner.email.indexOf("@")) }}</p>
      <p class="text-sm" >{{ props.item.text }}</p>
      <p class="text-sm md:text-[13px] text-zinc-600">
        {{ date!.toLocaleDateString() }} {{ date!.toLocaleTimeString() }}
      </p>
    </div>
  </div>
</template>
