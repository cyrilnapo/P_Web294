<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  book: {
    type: Object,
    required: true,
    default: () => ({})
  },
  author: {
    type: Object,
    required: false,
    default: () => null
  },
  category: {
    type: Object,
    required: false,
    default: () => null
  },
  ratings: {
    type: Array,
    required: false,
    default: () => []
  },
  user: {
    type: Object,
    required: false,
    default: () => null
  }
})

const averageRating = computed(() => {
  if (props.ratings.length === 0) return 0
  const total = props.ratings.reduce((acc, rating) => acc + rating, 0)
  return total / props.ratings.length
})
</script>

<template>
  <div class="card" v-if="book && Object.keys(book).length > 0">
    <a class="title" v-if="$route.name === 'AllBooksView'" :href="'/comment/' + book.id">{{
      book.title
    }}</a>
    <a class="user" v-if="$route.name === 'AllBooksView'" :href="'/comment/' + book.id">{{
      user ? user.username : 'Inconnu'
    }}</a>

    <p class="author" v-if="author">Auteur: {{ author.firstname }} {{ author.lastname }}</p>
    <p class="count_pages">{{ book.numberOfPages }} pages</p>
    <p class="edition_year">Année d'apparition: {{ book.editionYear }}</p>
    <p class="category" v-if="category">Categorie: {{ category.name }}</p>
    <p class="average_rating">Note moyenne: {{ averageRating }}</p>
    <a :href="book.pdfLink" target="_blank">PDF Link</a>
    <a v-if="$route.name === 'deletePage'" :href="'/delete/' + book.id" class="delete-link"
      >Supprimer</a
    >
    <a v-if="$route.name === 'AllBooksView'" :href="'/comment/' + book.id" class="delete-link"
      >Commenter</a
    >
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
  margin: 5px 0;
  display: inline-block;
  width: 250px;
}

.cards .card p {
  margin: 1px 0;
}

.card a {
  display: block;
  color: #43aa8b;
  margin-top: 10px;
  font-size: 14px;
}
</style>
