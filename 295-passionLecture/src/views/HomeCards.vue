<script setup>
import { ref, onMounted } from 'vue'
import BookCard from '@/components/BookCard.vue'

const books = ref([]) // Ensure books is defined and initialized
import BookService from '../services/BookService.js'

const loading = ref(true)
const error = ref(null)

const fetchBooks = () => {
  BookService.getBooks()
    .then((response) => {
      console.log(response.data.data)
      books.value = response.data.data
      loading.value = false
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des livres:', error)
      loading.value = false
      error.value = 'Erreur lors de la récupération des livres.'
    })
}

onMounted(fetchBooks)
</script>

<template>
  <div>
    <BookCard v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>
