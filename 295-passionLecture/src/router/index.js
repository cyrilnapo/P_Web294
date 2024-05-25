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
      path: '/comment',
      name: 'comment',
      props: true,
      component: () => import('../views/Addcomment.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddBook.vue')
    },
    {
      path: '/deletePage',
      name: 'deletePage',
      props: true,
      component: () => import('../views/DeleteBook.vue')
    },
    {
      path: '/delete/:id',
      name: 'deleteBook',
      props: true,
      component: () => import('../views/bookDeleted.vue')
    }
  ]
})

export default router
