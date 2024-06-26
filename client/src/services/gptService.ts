import { api } from '@/api/instance';
import type { AxiosResponse } from 'axios';
import type { IPost } from '@/types/post.interface';
import type { Chat, ChatMessage } from '@/types/ui.interface';


export default class GptService {
  static async gptChat(data: { text: string; pdf: string }): Promise<AxiosResponse<ChatMessage>> {
    return api.post('/gpt/pdfanalizer', data);
  }
  static async gptPosts(data: {text: string}): Promise<AxiosResponse<string>> {
    return api.post('/gpt/podborka', data);
  }

  static async getFileGptById (id: string): Promise<AxiosResponse<Chat>> {
    return api.get(`/files/${id}`);
  }
}
