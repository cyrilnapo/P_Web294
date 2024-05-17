<template>
  <main>
    <BookFilter />
    <h2>Liste de livre</h2>
    <div>
      <BookCard v-for="book in books" v-bind:key="book.id" v-bind:book="book" />
    </div>
  </main>
  <footer>Ce site a été créé par M.Velickovic, A.Zeqiri, C.Napoleone, Y.Cardis</footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BookService from '../services/BookService.js'
import BookCard from '../components/BookCard.vue'
import BookFilter from '../components/bookFilter.vue'

const books = ref([])
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

<style scoped>
/* Vos styles */
</style>
