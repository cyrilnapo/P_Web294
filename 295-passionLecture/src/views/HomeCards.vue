<script setup>
import { ref, onMounted } from 'vue'
import BookCard from '../components/BookCard.vue'

const bookData = ref(null)

const fetchBooks = async () => {
  try {
    const response = await fetch('api/books/1') // Remplacez l'URL par celle de votre API
    const data = await response.json()
    bookData.value = data
  } catch (error) {
    console.error('Error fetching book data:', error)
  }
}

onMounted(fetchBooks)
</script>

<template>
  <div>
    <BookCard :book="bookData" />
  </div>
</template>
