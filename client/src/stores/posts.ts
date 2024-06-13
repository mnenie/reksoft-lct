import useFilteredNews from '@/composables/useFilteredNews';
import type { IComment, IPost } from '@/types/post.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import PostService from '@/services/postsService';


export const usePostStore = defineStore('posts', () => {
  const posts = ref<IPost[]>([]);
  const search = ref<string>('');
  const showCreateForm = ref<boolean>(false);

  const { filteredNotes } = useFilteredNews(posts, search);

  const fetchPosts = async function() : Promise<IPost[]> {
    try {
      // const fetchedPosts : IPost[] = (await PostService.posts()).data || [];
      const fetchedPosts = [] as IPost[];
      return fetchedPosts;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  const postPost = async function(post: IPost) : Promise<void> {
    try {
      // const resp = await PostService.post(post);
      // post = resp.data
      posts.value.push(post);
    } catch (err) {
      console.log(err)
    }
  }
  const patchPost = async function(post: IPost) : Promise<void> {
    try {
      await PostService.patch(post);
    } catch (err) {
      console.log(err)
    }
  }
  const deletePost = async function(post: IPost) : Promise<void> {
    try {
      await PostService.delete(post);
    } catch (err) {
      console.log(err)
    }
  }
  const postComment = async function(post: IPost, comment: IComment) : Promise<IPost> {
    try {
      const resp = await PostService.postComment(post, comment);
      return resp.data;
    } catch (err) {
      console.log(err)
      return {} as IPost;
    }
  }
  const postImage = async function(post: IPost) : Promise<void> {
    try {
      await PostService.post(post);
      posts.value.push(post);
    } catch (err) {
      console.log(err)
    }
  }
  const postFile = async function(post: IPost) : Promise<void> {
    try {
      await PostService.post(post);
      posts.value.push(post);
    } catch (err) {
      console.log(err)
    }
  }

  
  return {
    posts,
    search,
    showCreateForm,
    filteredNotes,
    fetchPosts,
    postPost,
    patchPost,
    deletePost,
    postComment,
    postFile,
    postImage
  };
});
