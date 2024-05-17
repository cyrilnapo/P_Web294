import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import OuvragesPage from '@/views/OuvragesPage.vue'
import test from '@/views/testvue.vue'
import AddComment from '../views/Addcomment.vue'
import AddBook from '../views/AddBook.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/comment',
      name: 'comment',
      component: AddComment
    },
    {
      path: '/add',
      name: 'add',
      component: AddBook
    }
  ]
})

export default router
