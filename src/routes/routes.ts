import ContainerList from '@/components/ui/ContainerList.vue';
import HomePage from '@/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/group/:id',
      name: 'group',
      component: ContainerList,
    },
  ],
});

export default router;
