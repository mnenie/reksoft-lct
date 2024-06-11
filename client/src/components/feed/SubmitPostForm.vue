<script setup lang="ts">
import { ref } from 'vue';
import { usePostStore } from '@/stores/posts';
import { useTextareaAutosize } from '@vueuse/core';

import FormFiles from '../feed/form/FormFiles.vue';
import FormImages from '../feed/form/FormImages.vue';

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText
} from '@/components/ui/tags-input';

import { ImagePlus } from 'lucide-vue-next';
import { FilePlus } from 'lucide-vue-next';
import type { IPost } from '@/types/post.interface';


const postStore = usePostStore();

const { textarea, input } = useTextareaAutosize();

const title = defineModel<string>();
const tags = ref<string[]>([]);
const attachedFiles = ref<string[]>([]);
const attachedImages = ref<string[]>([]);

function addFile() {
  attachedFiles.value.push("new_file.pdf")
}
function addImage() {
  attachedImages.value.push(`150.png`)
}

function submit() {
  const count = postStore.posts.length + 1;
  const newPost = {
      _id: count,
      title: title.value || "",
      tags: tags.value,
      owner: { _id: '7', email: 'svo', tags: [] },
      text: input.value,
      img: attachedImages.value,
      attachment: attachedFiles.value,
      publishDate: new Date(),
      likeCount: 0,
      comments: []
    } as IPost;
  postStore.posts.push(newPost);
  postStore.showCreateForm = false;
}

</script>

<template>

  <div class="flex flex-col space-y-6 w-full border rounded-lg px-6 py-3 bg-white">
    <div class="space-y-3">
      <Label for="name" class="text-right text-xl font-bold">
        Создать новость
      </Label>
      <Input v-model="title" class="w-1/2" placeholder="Заголовок" />
    </div>
    <div>
      <TagsInput v-model="tags">
        <TagsInputItem v-for="item in tags" :key="item" :value="item">
          <TagsInputItemText />
          <TagsInputItemDelete />
        </TagsInputItem>
        <TagsInputInput class="placeholder:text-muted-foreground" placeholder="Добавьте ключевые слова..." />
      </TagsInput>
    </div>
    <div class="space-y-1">
      <textarea 
      ref="textarea" 
      v-model="input" 
      placeholder="Что у вас нового?"
      class="flex min-h-[80px] w-full rounded-md border border-input bg-transparent resize-none px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground text-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
      </textarea>
    </div>
    <div>
      <div>
        <FormImages :images="attachedImages" />
        <p v-if="attachedImages.length" class="max-w-5 text-sm text-gray-400" @click="attachedImages = []">Очистить</p>
      </div>
      <div>
        <FormFiles :files="attachedFiles" />
        <p v-if="attachedFiles.length" class="max-w-5 text-sm text-gray-400" @click="attachedFiles = []">Очистить</p>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex space-x-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ImagePlus class="cursor-pointer hover:text-gray-700" @click="addImage" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Загрузить изображение</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FilePlus class="cursor-pointer hover:text-gray-700" @click="addFile" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Добавить файл</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div class="flex space-x-3 ml-auto">
        <Dialog>
          <DialogTrigger>
            <Button variant="ghost">Отмена</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Удалить новость?</DialogTitle>
              <DialogDescription>
                Вы уверены, что хотите удалить новость?
              </DialogDescription>
            </DialogHeader>
            <DialogClose as-child>
              <Button variant="ghost">Отмена</Button>
            </DialogClose>
            <Button @click="postStore.showCreateForm = false">Удалить</Button>
          </DialogContent>
        </Dialog>
        <Button v-if="!(title && (input || attachedFiles.length || attachedImages.length))" disabled>
          Опубликовать
        </Button>
        <Button v-else @click="submit">Опубликовать</Button>
      </div>
    </div>

  </div>

</template>