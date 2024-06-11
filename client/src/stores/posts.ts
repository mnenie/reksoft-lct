import useFilteredNews from '@/composables/useFilteredNews';
import type { IPost } from '@/types/post.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostStore = defineStore('posts', () => {
  const posts = ref<IPost[]>([]);
  const search = ref<string>('');
  const showCreateForm = ref<boolean>(false);

  const { filteredNotes } = useFilteredNews(posts, search);
  
  return {
    posts,
    search,
    showCreateForm,
    filteredNotes
  };
});
