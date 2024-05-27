import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/AllBooksView',
      name: 'AllBooksView',
      props: true,
      component: () => import('@/views/AllBooksView.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddBook.vue')
    },
    {
      path: '/delete/:id',
      name: 'deleteBook',
      props: true,
      component: () => import('../views/bookDeleted.vue')
    },
    {
      path: '/DetailBookView/:id',
      name: 'DetailBookView',
      props: true,
      component: () => import('../views/DetailBookView.vue')
    },
    {
      path: '/DetailUserView/:id',
      name: 'DetailUserView',
      props: true,
      component: () => import('../views/DetailUserView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      props: true,
      component: () => import('../views/EditBookView.vue')
    }
  ]
})

export default router
