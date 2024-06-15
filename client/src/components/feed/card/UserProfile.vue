<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { usePostStore } from '@/stores/posts';
import type { IPost } from '@/types/post.interface';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Ellipsis } from 'lucide-vue-next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Button from '@/components/ui/button/Button.vue';


const props = defineProps<{
  item: IPost;
}>();

const authStore = useAuthStore();
const postStore = usePostStore();

let date = new Date(props.item.createdAt || "");
const owner = props.item.owner!;

</script>

<template>
  <div class="flex flex-row items-center">
    <Avatar class="mr-2 size-10">
      <AvatarImage v-if="owner" :src="owner.photoUrl!"></AvatarImage>
      <AvatarFallback v-if="owner">{{ owner.email.slice(1, 3) }}</AvatarFallback>
    </Avatar>
    <div class="flex flex-col">
      <p class="text-base font-bold">{{ owner && owner.email.slice(0, owner.email.indexOf("@")) }}</p>
      <p class="text-sm md:text-[13px] text-zinc-500">
        {{ date!.toLocaleDateString() }} {{ date!.toLocaleTimeString() }}
      </p>
    </div>

    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Ellipsis class="ml-auto mr-3 size-5 rounded-md hover:bg-gray-200 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-[200px]">
        <DropdownMenuItem> Сохранить в закладках </DropdownMenuItem>
        <DropdownMenuItem> Пожаловаться </DropdownMenuItem>
        <Dialog v-if="props.item.owner!._id == authStore.user.userData._id" @click.stop="">
          <DialogTrigger class="w-full text-red-600 relative hover:text-red-700 hover:bg-zinc-100 flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            <div>Удалить</div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Удалить новость?</DialogTitle>
              <DialogDescription>
                Вы уверены, что хотите удалить новость?
              </DialogDescription>
            </DialogHeader>
            <DialogClose>
              <Button variant="ghost">Отмена</Button>
            </DialogClose>
            <Button @click="postStore.deletePost(props.item)">Удалить</Button>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
