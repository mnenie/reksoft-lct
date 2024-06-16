import GptService from '@/services/gptService';
import type { IPost } from '@/types/post.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGptStore = defineStore('gpt', () => {
  const news = ref<IPost[]>([]);
  const pdfContent = ref<string>('');
  const url = ref<string>('');

  const gptPostNews = async (data: string) => {
    const response = await GptService.gptPosts(data);
    news.value = response.data;
    // console.log(response.data);
  };
  const gptChat = async (data: string) => {
    const response = await GptService.gptChat({ text: data, pdf: pdfContent.value });
    return response.data;
  };

  const getFileGpt = async (id: string) => {
    const response = await GptService.getFileGptById(id);
    url.value = response.data.url;
    return response.data;
  };

  return {
    news,
    pdfContent,
    url,
    getFileGpt,
    gptPostNews,
    gptChat
  };
});
