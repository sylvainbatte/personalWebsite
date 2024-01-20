import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PresentationView.vue')
    },
    {
      path: '/presentation',
      name: 'presentation',
      component: () => import('../views/PresentationView.vue')
    },
    {
      path: '/projects',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('../views/PhotoView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router