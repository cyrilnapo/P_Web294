<script setup>
import { defineProps, ref } from 'vue'
import BookService from '../services/BookService.js'

const props = defineProps({
  book: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

const category = ref(null)

// Méthode pour récupérer la catégorie du livre
const fetchCategory = () => {
  if (props.book.categoryId) {
    BookService.getCategory(props.book.categoryId)
      .then((response) => {
        category.value = response.data // Assurez-vous que votre service BookService renvoie les données de la catégorie correctement
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération de la catégorie:', error)
      })
  }
}

fetchCategory()
</script>

<template>
  <div class="card" v-if="book && Object.keys(book).length > 0">
    <p class="title">{{ book.title }}</p>
    <p class="author">Author ID: {{ book.authorId }}</p>
    <p class="count_pages">{{ book.numberOfPages }} pages</p>
    <p class="edition_year">Edition Year: {{ book.editionYear }}</p>
    <p class="category" v-if="category">Category: {{ category.name }}</p>
    <!-- Affichage de la catégorie -->
    <a :href="book.pdfLink" target="_blank">PDF Link</a>
  </div>
  <div v-else>
    <p>Loading book details...</p>
  </div>
</template>

<style scoped>
.card {
  background-color: #254441;
  margin: auto;
  color: var(--white);
  padding: 15px;
  margin: 5px 0px 0px 0px;
}

.cards {
  font-size: 14px;
  width: 50%;
}

.cards .card p {
  margin: 1px 0;
}

.cards .card .stars {
  color: #c5bb31;
  font-size: 1.2rem;
}

.card img {
  max-width: 100%;
  border-radius: 8px;
  max-height: 50px;
}

.card p {
  margin: 1px 0;
  font-size: 14px;
}

.card a {
  display: block;
  color: #43aa8b;
  margin-top: 10px;
  font-size: 14px;
}
</style>
