import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')

    },
    {
      path: '/jobs/results',
      name: 'JobResults',
      component: () => import('../views/JobResultsView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.path !== from.path)
    NProgress.start()
})
router.afterEach(() => { NProgress.done() })

export default router
