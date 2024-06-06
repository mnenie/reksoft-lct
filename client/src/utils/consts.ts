import type { Link } from '@/types/ui.interface';
import { Home, Settings, SquareUser } from 'lucide-vue-next';
import { h, ref } from 'vue';

//routes
export const HOME_ROUTE = '/';
export const LOGIN_ROUTE = '/user/login';
export const REGISTRATION_ROUTE = '/user/registration';
export const ROLE_ROUTE = '/user/role';
export const PROFILE_ROUTE = '/profile';
export const SETTINGS_ROUTE = '/settings';
export const NEWS_ROUTE_ID = '/news/:id';
export const NOTFOUND_ROUTE = '/:pathMatch(.*)*';

//links
export const links = ref<Link[]>([
  {
    id: '0',
    title: 'Лента',
    label: '128',
    icon: h(Home),
    path: HOME_ROUTE
  },
  {
    id: '1',
    title: 'Профиль',
    label: '',
    icon: h(SquareUser),
    path: PROFILE_ROUTE
  },
  {
    id: '2',
    title: 'Настройки',
    label: '',
    icon: h(Settings),
    path: SETTINGS_ROUTE
  }
]);
