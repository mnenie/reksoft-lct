import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import AuthLayout from '@/layouts/AuthLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { HOME_ROUTE, LOGIN_ROUTE } from '@/utils/consts';

type RouterRecord = Omit<RouteRecordRaw, 'name' | 'children'> & {
  name: string;
  children?: RouterRecord[];
};

const routes = [
  {
    name: 'home',
    path: HOME_ROUTE,
    component: () => import('@/pages/HomePage.vue'),
    meta: {
      layout: DefaultLayout
    }
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('@/pages/user/MainAuthPage.vue'),
    children: [
      {
        name: 'login',
        path: LOGIN_ROUTE,
        component: () => import('@/pages/user/LoginPage.vue')
      }
    ],
    meta: {
      layout: AuthLayout
    }
  }
] satisfies readonly RouterRecord[];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;
