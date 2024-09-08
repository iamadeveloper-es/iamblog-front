import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'POSTS',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/post/:id',
      name: 'POST',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/categories/:name/:id',
      name: 'CATEGORIES',
      component: () => import('../views/CategoriesViews.vue')
    }
  ]
})

export default router
