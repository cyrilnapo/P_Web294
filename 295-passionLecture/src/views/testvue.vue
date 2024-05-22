<script setup>
import { ref, computed, onMounted } from 'vue'
import BookService from '../services/BookService.js'
import BookCard from '../components/BookCard.vue'
import BookFilter from '../components/bookFilter.vue'

const books = ref([])
const categories = ref({})
const authors = ref({})
const ratings = ref({})
const loading = ref(true)
const error = ref(null)
const searchTerm = ref('')
const selectedCategory = ref('')

const fetchBooks = () => {
  BookService.getBooks()
    .then((response) => {
      books.value = response.data.data
      loading.value = false
      fetchCategories(response.data.data)
      fetchAuthors(response.data.data)
      fetchRatings(response.data.data)
    })
    .catch((error) => {
      loading.value = false
      error.value = 'Erreur lors de la récupération des livres.'
    })
}

const fetchCategories = (booksData) => {
  const categoryIds = [...new Set(booksData.map((book) => book.categoryId))]
  categoryIds.forEach((categoryId) => {
    BookService.getCategory(categoryId)
      .then((response) => {
        categories.value[categoryId] = response.data
        console.log('Category loaded:', categoryId, response.data)
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des catégories:', error)
      })
  })
}

const fetchAuthors = (booksData) => {
  const authorIds = [...new Set(booksData.map((book) => book.authorId))]
  authorIds.forEach((authorId) => {
    BookService.getAuthor(authorId)
      .then((response) => {
        authors.value[authorId] = response.data.data
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des auteurs :', error)
      })
  })
}

const fetchRatings = (booksData) => {
  const bookIds = booksData.map((book) => book.id)
  bookIds.forEach((bookId) => {
    BookService.getBookRatings(bookId)
      .then((response) => {
        const ratings = response.data.data.map((rating) => rating.note)
        const bookIndex = books.value.findIndex((book) => book.id === bookId)
        if (bookIndex !== -1) {
          books.value[bookIndex].ratings = ratings
        }
        console.log(ratings)
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des notes :', error)
      })
  })
}

onMounted(fetchBooks)

const filteredBooks = computed(() => {
  return books.value.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    return matchesSearch
  })
})

const handleSearch = (term) => {
  searchTerm.value = term
}
</script>

<template>
  <main>
    <BookFilter @search="handleSearch" />
    <h2>Liste de livres</h2>
    <div>
      <BookCard
        v-for="book in filteredBooks"
        :key="book.id"
        :book="book"
        :author="authors[book.authorId]"
        :category="categories[book.categoryId]"
        :ratings="book.ratings"
      />
    </div>
  </main>
  <footer>Ce site a été créé par M.Velickovic, A.Zeqiri, C.Napoleone, Y.Cardis</footer>
</template>

<style scoped>
div {
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

footer {
  padding: 10%;
  text-align: center;
}
</style>
