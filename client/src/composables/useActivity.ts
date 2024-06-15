import { computed } from 'vue';
import type { Ref } from 'vue';
import type { IPost } from '@/types/post.interface';

export default function useActivity(posts: Ref<IPost[]>) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = computed(() => {
    return months.map((monts, index) => {
      const filteredPosts = [...posts.value].filter((p) => +p.createdAt! === index);
      return { name: monts, news_per_month: filteredPosts.length };
    });
  });

  return {
    data
  };
}
