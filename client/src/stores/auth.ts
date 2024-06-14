import { defineStore } from 'pinia';
import { ref } from 'vue';
import UserService from '@/services/authService';
import { useCookies } from '@vueuse/integrations/useCookies';
import type { Role, User, UpdateUserData } from '@/types/user.interface';
import { useRouter } from 'vue-router';
import { HOME_ROUTE, LOGIN_ROUTE } from '@/utils/consts';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User>({} as User);
  const token = useCookies();
  const updateFl = ref<boolean>(false);
  const isPending = ref<boolean>(false);
  const role = ref<Role>('recruiter');
  const tags = ref<string[]>([]);
  const router = useRouter();

  const setRole = (newRole: Role) => {
    role.value = newRole;
  };

  const login = async (email: string, password: string) => {
    isPending.value = true;
    try {
      const response = await UserService.login(email, password);
      user.value = response.data;
      token.set('token', response.data.token, { path: HOME_ROUTE });
      await router.push(HOME_ROUTE);
    } catch (err) {
      console.log(err);
    } finally {
      isPending.value = false;
    }
  };

  const registration = async (data: { email: string; password: string }) => {
    isPending.value = true;
    try {
      const response = await UserService.registration({ ...data, role: role.value, tags: tags.value });
      user.value = response.data;
      token.set('token', response.data.token, { path: HOME_ROUTE });
      await router.push(HOME_ROUTE);
    } catch (err) {
      console.log(err);
    } finally {
      isPending.value = false;
    }
  };

  const getCurrentUser = async () => {
    const response = await UserService.getUser();
    user.value = response.data;
  };

  const updateUser = async (data: UpdateUserData) => {
    const response = await UserService.updateUser(data);
    user.value = response.data;
    updateFl.value = true;
  };

  const logout = () => {
    token.remove('token');
    user.value = {} as User;
    router.push(LOGIN_ROUTE);
  };

  return {
    user,
    role,
    tags,
    updateFl,
    isPending,
    setRole,
    registration,
    login,
    logout,
    getCurrentUser,
    updateUser
  };
});
