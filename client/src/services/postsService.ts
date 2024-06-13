import type { IComment, IPost } from '@/types/post.interface';
import { api } from '@/api/instance';
import type { AxiosResponse } from 'axios';
import { useCookies } from '@vueuse/integrations/useCookies';

const token = useCookies();

export default class PostService { 
  static async posts(): Promise<AxiosResponse<IPost[]>> {
    return api.get('/posts');
  }
  static async post(post: IPost): Promise<AxiosResponse<IPost>> {
    return api.post('/posts', post, {
      headers: { Authorization: `Bearer ${token.get("token")}` },
    });
  }
  static async patch(post: IPost): Promise<AxiosResponse> {
    return api.patch(`/posts${post._id}`, post, {
      headers: { Authorization: `Bearer ${token.get("token")}` },
    });
  }
  static async delete(post: IPost): Promise<AxiosResponse> {
    return api.delete(`/posts${post._id}`, {
      headers: { Authorization: `Bearer ${token.get("token")}` },
    });
  }
  static async postComment(post: IPost, comment: IComment): Promise<AxiosResponse> {
    return api.post(`posts/${post._id}/comments`, comment, {
      headers: { Authorization: `Bearer ${token.get("token")}` },
    });
  }
  static async postFile(post: IPost): Promise<AxiosResponse> {
    return api.post('upload/pdf', post, {
      headers: { Authorization: `Bearer ${token.get("token")}` },
    });
  }
  static async postImage(post: IPost): Promise<AxiosResponse> {
    return api.post('upload/image', post, {
      headers: { Authorization: `Bearer ${token.get("token")}` },
    });
  }
}
