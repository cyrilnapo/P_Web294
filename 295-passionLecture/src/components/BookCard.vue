<template>
  <div class="card">
    <div class="img"><img :src="book.imagePath" /></div>

    <p class="title">{{ book.title }}</p>
    <p class="abstract">{{ book.abstract }}</p>
    <p class="author">{{ getAuthorName(book.authorId) }}</p>
    <p class="count_pages">{{ book.numberOfPages }} pages</p>
    <p class="edition_year">Edition Year: {{ book.editionYear }}</p>
    <a :href="book.pdfLink" target="_blank">PDF Link</a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  book: Object // Define the type of the prop
})

// Simulated data mapping for authorId to author name
const authorMap = {
  1: 'Xavier Parmentier',
  2: 'Jules Verne'
}

// Function to get author name based on authorId
function getAuthorName(authorId) {
  return authorMap[authorId] || 'Unknown Author'
}
</script>

<style scoped>
.card {
  background-color: #254441;
  margin: auto;
  color: #eeeeee;
  padding: 10px; /* Réduire le padding pour diminuer l'espace intérieur */
  max-width: 300px; /* Définir une largeur maximale pour la carte */
  border-radius: 8px; /* Ajouter des coins arrondis pour un aspect plus esthétique */
}

.card img {
  max-width: 100%; /* Assurer que l'image ne dépasse pas la largeur de la carte */
  border-radius: 8px; /* Appliquer des coins arrondis à l'image */
  max-height: 50px;
}

.card p {
  margin: 1px 0;
  font-size: 14px; /* Réduire la taille de la police */
}

.card a {
  display: block;
  color: #43aa8b;
  margin-top: 10px;
  font-size: 14px; /* Réduire la taille de la police pour le lien */
}
</style>
