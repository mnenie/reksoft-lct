import { computed } from 'vue';
import type { Ref } from 'vue';
import type { IPost } from '@/types/post.interface';
import type { Activity } from '@/types/ui.interface';

export default function useActivity(posts: IPost[]) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = computed(() => {
    return months.map((month, index) => {
      const filteredUserPosts = posts.filter((p) => {
        const postDate = new Date(p.createdAt!);
        return postDate.getMonth() === index;
      });
      return { name: month, news_per_month: filteredUserPosts.length } as Activity;
    }).filter((item) => item !== undefined) as Activity[];
  });

  return {
    data
  };
}
