<template>
  <div class="card">
    <img :src="book.imagePath" />
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
  padding: 20px;
}

.card img {
  max-width: 100%;
}

.card p {
  margin: 1px 0;
}

.card a {
  display: block;
  color: #43aa8b;
  margin-top: 10px;
}
</style>
