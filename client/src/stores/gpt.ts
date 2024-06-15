import GptService from '@/services/gptService';
import type { IPost } from '@/types/post.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGptStore = defineStore('gpt', () => {
  const news = ref<IPost[]>([]);

  const gptPostNews = async (data: string) => {
    const response = await GptService.gptPosts(data);
    news.value = response.data;
    // console.log(response.data);
  };

  return {
    news,
    gptPostNews
  }
});
