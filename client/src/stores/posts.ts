import useFilteredNews from '@/composables/useFilteredNews';
import type { IComment, IFile, IPost } from '@/types/post.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import PostService from '@/services/postsService';

export const usePostStore = defineStore('posts', () => {
  const posts = ref<IPost[]>([]);
  const search = ref<string>('');
  const typeSearch = ref<string[]>(["article", "recruiter", "applicant"]);
  const showCreateForm = ref<boolean>(false);

  const { filteredNotes } = useFilteredNews(posts, search, typeSearch);

  const fetchPosts = async function (limit: number, skip: number): Promise<IPost[]> {
    try {
      const fetchedPosts: IPost[] = (await PostService.posts(limit, skip)).data;
      return fetchedPosts;
    } catch (err) {
      console.log(err);
      return [];
    }
  };
  const postPost = async function (post: IPost): Promise<void> {
    try {
      const resp = await PostService.post(post);
      post = resp.data;
      posts.value.push(post);
    } catch (err) {
      console.log(err);
    }
  };
  const patchPost = async function (id: string, post: object): Promise<void> {
    try {
      await PostService.patch(id, post);
    } catch (err) {
      console.log(err);
    }
  };
  const deletePost = async function (post: IPost): Promise<void> {
    try {
      await PostService.delete(post);
      posts.value = posts.value.filter((p) => p._id !== post._id);
    } catch (err) {
      console.log(err);
    }
  };
  const postComment = async function (post: IPost, comment: IComment): Promise<IPost> {
    try {
      const resp = await PostService.postComment(post, comment);
      return resp.data;
    } catch (err) {
      console.log(err);
      return {} as IPost;
    }
  };
  const postImage = async function (post: IFile): Promise<IFile> {
    try {
      return (await PostService.postImage(post)).data;
    } catch (err) {
      console.log(err);
      return post;
    }
  };
  const setLike = async function (post: IPost): Promise<IPost> {
    try {
      const response = await PostService.putLike(post);
      return response.data;
    } catch (err) {
      console.log(err);
      return {} as IPost;
    }
  };
  const setUnlike = async function (post: IPost): Promise<IPost> {
    try {
      const response = await PostService.putUnlike(post);
      return response.data;
    } catch (err) {
      console.log(err);
      return {} as IPost;
    }
  };
  const postFile = async function (post: IFile): Promise<IFile> {
    try {
      return (await PostService.postFile(post)).data;
    } catch (err) {
      console.log(err);
      return post;
    }
  };

  return {
    posts,
    search,
    typeSearch,
    showCreateForm,
    filteredNotes,
    fetchPosts,
    postPost,
    patchPost,
    deletePost,
    postComment,
    postFile,
    setLike,
    setUnlike,
    postImage
  };
});
