import { api } from '@/api/instance';
import type { AxiosResponse } from 'axios';
import type { IComment, IFile, IPost } from '@/types/post.interface';

export default class GptService {
  static async gptPosts(text: string): Promise<AxiosResponse<IPost[]>> {
    return api.post('/gpt/podborka', text)
  }
}
