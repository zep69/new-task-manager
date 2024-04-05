import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path:'/music',
      name:'music',
      component:()=> import('../views/MusikView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path:'/main',
      name:'main',
      component: () => import('../views/MainView.vue'),
      children:[
        {
          path:'/main/profile',
          name:'profile',
          component: () => import('../views/main/ProfileView.vue')
        },
        {
          path:'/main/task',
          name:'task',
          component: ()=> import('../views/TaskView.vue')
        }
      ]
    }

  ]
})

export default router
