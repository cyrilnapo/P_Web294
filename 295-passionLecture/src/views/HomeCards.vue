<script setup>
import BookCard from '@/components/BookCard.vue'

import { ref, onMounted } from 'vue'
import BookService from '../services/BookService.js'

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

<template>
  <main>
    <h1>NOS RÉCENTS OUVRAGES</h1>
    <div>
      <BookCard v-for="book in books" v-bind:key="book.id" v-bind:book="book" />
    </div>
  </main>
</template>

<style scoped>
main {
  width: 50%;
}

h1 {
  text-align: center;
}

div {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin: auto;
}
</style>
