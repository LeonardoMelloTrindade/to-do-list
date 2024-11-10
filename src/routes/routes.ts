import PillarContainer from '@/components/container/pillarContainer.vue';
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PillarContainer
    },
  ]
});

export default router;
