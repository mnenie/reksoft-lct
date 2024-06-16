<script setup lang="ts">
import { ref } from 'vue';
import { usePostStore } from '@/stores/posts';
import { useFileDialog, useTextareaAutosize } from '@vueuse/core';

import FormFiles from '../feed/form/FormFiles.vue';
import FormImages from '../feed/form/FormImages.vue';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText
} from '@/components/ui/tags-input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { ImagePlus } from 'lucide-vue-next';
import { FilePlus } from 'lucide-vue-next';
import type { IFile, IPost, Role } from '@/types/post.interface';

const postStore = usePostStore();

const { textarea, input } = useTextareaAutosize();

const title = defineModel<string>();
const tags = ref<string[]>([]);
const postType = ref<Role | 'article'>('applicant');
const attachedFiles = ref<IFile[]>([]);
const attachedImages = ref<IFile[]>([]);

const imageUploader = useFileDialog({
  accept: 'image/*',
  multiple: true
});
const pdfUploader = useFileDialog({
  accept: '.pdf',
  multiple: true
});

imageUploader.onChange(async () => {
  for (let i = 0; i < imageUploader.files.value!.length; i++) {
    const file = imageUploader.files.value![i];
    if (file) {
      const localPhotoUrl = URL.createObjectURL(file);
      const newFile = { _id: '', url: localPhotoUrl, name: file.name, size: file.size } as IFile;
      const resp = await postStore.postImage(newFile);
      newFile.url = resp.url;
      newFile._id = resp._id;
      attachedImages.value.push(newFile);
    }
  }
});

pdfUploader.onChange(async () => {
  for (let i = 0; i < pdfUploader.files.value!.length; i++) {
    const file = pdfUploader.files.value![i];
    if (file) {
      const localPdfUrl = URL.createObjectURL(file);
      const newFile = { url: localPdfUrl, name: file.name, size: file.size } as IFile;
      const resp = await postStore.postFile(newFile);
      newFile.url = resp.url;
      newFile._id = resp._id;
      attachedFiles.value.push(newFile);
    }
  }
});

async function submit() {
  const count = postStore.posts.length + 1;
  const newPost = {
    _id: count.toString(),
    title: title.value || '',
    tags: tags.value,
    postType: postType.value,
    text: input.value,
    img: attachedImages.value,
    attachment: attachedFiles.value,
    likeCount: 0,
    userLikes: [],
    comments: []
  } as IPost;
  await postStore.postPost(newPost);
  postStore.showCreateForm = false;
}
</script>

<template>
  <div class="flex w-full flex-col space-y-6 rounded-lg border bg-white px-6 py-3">
    <div class="space-y-3">
      <Label for="name" class="text-right text-xl font-bold"> Создать новость </Label>
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
        class="flex min-h-[80px] w-full resize-none text-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      >
      </textarea>
    </div>
    <div>
      <RadioGroup :default-value="postType" :orientation="'vertical'">
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="r1" value="applicant" @click="postType = 'applicant'" />
          <Label for="r1">Резюме</Label>
        </div>
        <div class="flex items-center space-x-2" @click="postType = 'recruiter'">
          <RadioGroupItem id="r2" value="recruiter" />
          <Label for="r2">Вакансия</Label>
        </div>
        <div class="flex items-center space-x-2" @click="postType = 'article'">
          <RadioGroupItem id="r3" value="article" />
          <Label for="r3">Статья</Label>
        </div>
      </RadioGroup>
    </div>
    <div>
      <div>
        <FormImages :images="attachedImages" />
        <p
          v-if="attachedImages.length"
          class="mt-1 max-w-5 cursor-pointer text-sm text-gray-400"
          @click="attachedImages = []"
        >
          Очистить
        </p>
      </div>
      <div>
        <FormFiles :files="attachedFiles" />
        <p
          v-if="attachedFiles.length"
          class="mt-1 max-w-5 cursor-pointer text-sm text-gray-400"
          @click="attachedFiles = []"
        >
          Очистить
        </p>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex space-x-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ImagePlus
                :size="21"
                class="cursor-pointer text-zinc-800 hover:text-gray-700"
                @click="imageUploader.open"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Загрузить изображение</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FilePlus
                :size="21"
                class="cursor-pointer text-zinc-800 hover:text-gray-700"
                @click="pdfUploader.open"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Добавить файл</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div class="ml-auto flex space-x-3">
        <Dialog>
          <DialogTrigger>
            <Button variant="ghost">Отмена</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Удалить новость?</DialogTitle>
              <DialogDescription> Вы уверены, что хотите удалить новость? </DialogDescription>
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
