import AppLayout from '../layouts/AppLayout.vue';
import BreakMessages from '../views/BreakMessages.vue';
import Settings from '../views/Settings.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'settings',
          component: Settings,
        },
        {
          path: '/break-messages',
          name: 'break.messages',
          component: BreakMessages,
        },
      ],
    },
  ],
  strict: true,
  sensitive: true,
});

export default router;
