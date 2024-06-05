import type { Link } from '@/types/ui.interface';
import { Mails, Settings, User } from 'lucide-vue-next';
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
    title: 'News',
    label: '128',
    icon: h(Mails),
    path: HOME_ROUTE
  },
  {
    id: '1',
    title: 'Profile',
    label: '',
    icon: h(User),
    path: PROFILE_ROUTE
  },
  {
    id: '2',
    title: 'Settings',
    label: '',
    icon: h(Settings),
    path: SETTINGS_ROUTE
  }
]);
