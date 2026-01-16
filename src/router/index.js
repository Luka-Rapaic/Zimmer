import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/confirm-email',
      name: 'confirm-email',
      component: () => import('../views/ConfirmEmailView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/create-profile',
      name: 'create-profile',
      component: () => import('../views/CreateProfileView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/profile-card',
      name: 'profile-card',
      component: () => import('../views/ProfileCardView.vue')
    }
  ],
})

export default router
