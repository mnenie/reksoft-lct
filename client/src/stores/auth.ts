import { defineStore } from 'pinia';
import { ref } from 'vue';
import UserService from '@/services/authService';
import { useCookies } from '@vueuse/integrations/useCookies';
import type { Role, User, UpdateUserData } from '@/types/user.interface';
import { useRouter } from 'vue-router';
import { HOME_ROUTE } from '@/utils/consts';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User>({} as User);
  const token = useCookies();
  const updateFl = ref<boolean>(false);
  const role = ref<Role>('recruiter');
  const router = useRouter();

  const setRole = (newRole: Role) => {
    role.value = newRole;
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await UserService.login(email, password);
      user.value = response.data;
      token.set('token', response.data.token, { path: HOME_ROUTE });
      await router.push(HOME_ROUTE);
    } catch (err) {
      console.log(err);
    }
  };

  const registration = async (data: { email: string; password: string; tags: string[] }) => {
    try {
      const response = await UserService.registration({ ...data, role: role.value });
      user.value = response.data;
      token.set('token', response.data.token, { path: HOME_ROUTE });
      await router.push(HOME_ROUTE);
    } catch (err) {
      console.log(err);
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

  return {
    user,
    role,
    updateFl,
    setRole,
    registration,
    login,
    getCurrentUser,
    updateUser
  };
});
