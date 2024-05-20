<script setup>
import BookCard from '@/components/BookCard.vue'
import CommentSection from '@/components/CommentSection.vue'
import { RouterLink, RouterView } from 'vue-router'
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
  <div class="main">
    <div class="container">
      <CommentSection />
      <BookCard v-for="book in books" v-bind:key="book.id" v-bind:book="book" class="card" />
    </div>
  </div>
  <footer>Ce site a été créé par M.Velickovic, A.Zeqiri, C.Napoleone, Y.Cardis</footer>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  align-items: stretch;
  gap: 40px;
}
.card {
  width: 30%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 10%;
}
</style>
