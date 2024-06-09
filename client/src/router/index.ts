import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import AuthLayout from '@/layouts/AuthLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ChatLayout from '@/layouts/ChatLayout.vue';
import {
  CHAT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
  ROLE_ROUTE,
  TAGS_ROUTE
} from '@/utils/consts';
import { useCookies } from '@vueuse/integrations/useCookies.mjs';

type RouterRecord = Omit<RouteRecordRaw, 'name' | 'children'> & {
  name: string;
  children?: RouterRecord[];
};

const routes = [
  {
    name: 'home',
    path: HOME_ROUTE,
    component: () => import('@/views/Home.vue'),
    meta: {
      auth: false,
      layout: DefaultLayout
    }
  },
  {
    name: 'profile',
    path: PROFILE_ROUTE,
    component: () => import('@/views/Profile.vue'),
    meta: {
      auth: false,
      layout: DefaultLayout
    }
  },
  {
    name: 'chat',
    path: CHAT_ROUTE,
    component: () => import('@/views/Chat.vue'),
    meta: {
      auth: false,
      layout: ChatLayout
    }
  },
  {
    name: 'login',
    path: LOGIN_ROUTE,
    component: () => import('@/views/Login.vue'),
    meta: {
      auth: true,
      layout: AuthLayout
    }
  },
  {
    name: 'registration',
    path: REGISTRATION_ROUTE,
    component: () => import('@/views/Registration.vue'),
    meta: {
      auth: true,
      layout: AuthLayout
    }
  },
  {
    name: 'role',
    path: ROLE_ROUTE,
    component: () => import('@/views/Role.vue'),
    meta: {
      auth: true,
      layout: AuthLayout
    }
  },
  {
    name: 'tags',
    path: TAGS_ROUTE,
    component: () => import('@/views/Tags.vue'),
    meta: {
      auth: true,
      layout: AuthLayout
    }
  }
] satisfies readonly RouterRecord[];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

router.beforeEach((to) => {
  const cookies = useCookies();
  const token = cookies.get('token');

  if (!to.meta.auth && !token) return ROLE_ROUTE;
  if (to.meta.auth && token) return HOME_ROUTE;

  return true;
});

export default router;
