import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { HOME_ROUTE } from '@/utils/consts';
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

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
  }
] satisfies readonly RouterRecord[];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;
