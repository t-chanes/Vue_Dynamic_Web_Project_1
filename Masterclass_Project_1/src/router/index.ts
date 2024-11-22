import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  await authStore.getSession()

  const isAuthPage = ['/login', '/register'].includes(to.path)

  if (!authStore.user && !isAuthPage) {
    return {
      name: '/login'
    }
  }

  if (authStore.user && isAuthPage) {
    return {
      name: '/'
    }
  }
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
