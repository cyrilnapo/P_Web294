<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card" v-if="book">
    <p class="title">{{ book.title }}</p>
    <!-- <p class="abstract">{{ book.abstract }}</p> -->
    <p class="author">auteur</p>
    <p class="count_pages">{{ book.numberOfPages }} pages</p>
    <p class="edition_year">Edition Year: {{ book.editionYear }}</p>
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
