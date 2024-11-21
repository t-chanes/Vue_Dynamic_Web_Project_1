import { createRouter, createWebHistory } from 'vue-router/auto'
import {routes} from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

/*
routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/pages/index.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/pages/index.vue'),
    },
    {
      path: '/projects/:id',
      name: 'single-project',
      component: () => import('@/pages/[slug].vue'),
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/[...catchAll].vue'),
    }
  ],
*/
