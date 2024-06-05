import type { Role } from '@/types/user.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const role = ref<Role>('recruiter');
  const setRole = (newRole: Role) => {
    role.value = newRole;
  };
  return {
    role,
    setRole
  };
});
