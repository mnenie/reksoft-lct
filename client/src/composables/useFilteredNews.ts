import type { IPost } from '@/types/post.interface';
import { computed, type Ref } from 'vue';

export default function useFilteredNews(news: Ref<IPost[]>, inputFilter: Ref<string>) {
  const filteredNotes = computed(() => {
    if (inputFilter.value === '') return news.value;
    return news.value.filter((post) => post.title.toLowerCase().includes(inputFilter.value.toLowerCase()));
  });

  return {
    filteredNotes
  };
}
