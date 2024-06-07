import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import AuthLayout from '@/layouts/AuthLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ChatLayout from '@/layouts/ChatLayout.vue';
import { CHAT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, ROLE_ROUTE } from '@/utils/consts';

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
      layout: DefaultLayout
    }
  },
  {
    name: 'profile',
    path: PROFILE_ROUTE,
    component: () => import('@/views/Profile.vue'),
    meta: {
      layout: DefaultLayout
    }
  },
  {
    name: 'chat',
    path: CHAT_ROUTE,
    component: () => import('@/views/Chat.vue'),
    meta: {
      layout: ChatLayout
    }
  },
  {
    name: 'login',
    path: LOGIN_ROUTE,
    component: () => import('@/views/Login.vue'),
    meta: {
      layout: AuthLayout
    }
  },
  {
    name: 'registration',
    path: REGISTRATION_ROUTE,
    component: () => import('@/views/Registration.vue'),
    meta: {
      layout: AuthLayout
    }
  },
  {
    name: 'role',
    path: ROLE_ROUTE,
    component: () => import('@/views/Role.vue'),
    meta: {
      layout: AuthLayout
    }
  },
] satisfies readonly RouterRecord[];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;
