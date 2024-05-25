import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import AllBooksView from '@/views/AllBooksView.vue'
import AddComment from '../views/Addcomment.vue'
import AddBook from '../views/AddBook.vue'
import deletePage from '@/views/DeleteBook.vue'
import deleteBook from '@/views/bookDeleted.vue'

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
      component: AllBooksView
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
    },
    {
      path: '/deletePage',
      name: 'deletePage',
      component: deletePage
    },
    {
      path: '/delete/:id',
      name: 'deleteBook',
      component: deleteBook
    }
  ]
})

export default router
