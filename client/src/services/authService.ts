import { api } from '@/api/instance';
import type { AxiosResponse } from 'axios';
import type { User, UserAuth } from '@/types/user.interface';

export default class UserService {
  static async login(email: string, password: string): Promise<AxiosResponse<UserAuth>> {
    return api.post<UserAuth>('/auth/login', { email, password });
  }
  static async registration(regData: {
    email: string;
    password: string;
    role: string;
    tags: string[];
  }): Promise<AxiosResponse<UserAuth>> {
    return api.post<UserAuth>('/auth/register', regData);
  }

  static async getUser(): Promise<AxiosResponse<User>> {
    return api.get<User>('/auth/me');
  }

  static async updateUser(data: { photoUrl: string }): Promise<AxiosResponse<User>> {
    return api.patch<User>('/auth/redact', data);
  }
}
