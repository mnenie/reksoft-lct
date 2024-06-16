import type { IPost } from '@/types/post.interface';
import { computed } from 'vue';
import type { Ref } from 'vue';

export default function useFilteredNews(news: Ref<IPost[]>, inputFilter: Ref<string>, typeFilter: Ref<string[]>) {
  const filteredNotes = computed(() => {
    console.log(typeFilter)
    if (inputFilter.value === '') return news.value.filter((post) => typeFilter.value.includes(post.postType));
    return news.value.filter((post) => typeFilter.value.includes(post.postType)).filter((post) => post.title.toLowerCase().includes(inputFilter.value.toLowerCase()));
  });

  return {
    filteredNotes
  };
}
