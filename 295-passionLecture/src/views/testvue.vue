<!-- Your current component template -->
<template>
  <main>
    <BookFilter />
    <!-- Import BookFilter component here -->
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
const categories = ref({})
const authors = ref({})
const loading = ref(true)
const error = ref(null)

const fetchBooks = () => {
  BookService.getBooks()
    .then((response) => {
      console.log(response.data.data)
      books.value = response.data.data
      loading.value = false
      // Call fetchCategories here
      fetchCategories(response.data.data)
      fetchCategories(response.data.data)
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des livres:', error)
      loading.value = false
      error.value = 'Erreur lors de la récupération des livres.'
    })
}

// Method to fetch categories
const fetchCategories = (booksData) => {
  const categoryIds = [...new Set(booksData.map((book) => book.categoryId))]
  categoryIds.forEach((categoryId) => {
    BookService.getCategory(categoryId)
      .then((response) => {
        categories.value[categoryId] = response.data // Assuming your category data is like { id: categoryId, name: categoryName }
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des catégories:', error)
      })
  })
}

const fetchAuthors = (booksData) => {
  const authorIds = [...new Set(booksData.map((book) => book.authorId))]
  authorIds.forEach((authorId) => {
    BookService.getAuthor(authorId) // Utilisez 'getAuthor' au lieu de 'Getauthor'
      .then((response) => {
        authors.value[authorId] = response.data
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des auteurs :', error) // "catégories" -> "auteurs"
      })
  })
}

onMounted(fetchBooks)
</script>

<style scoped>
/* Vos styles */
</style>
