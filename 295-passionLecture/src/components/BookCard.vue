<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  book: Object // Define the type of the prop
})
</script>

<template>
  <div class="card">
    <img :src="book.image" />
    <p class="title">{{ book.title }}</p>
    <p class="genre">{{ book.genre }}</p>
    <p class="author">{{ book.author }}</p>
    <p class="count_pages">{{ book.pageCount }} pages</p>
    <p class="release_date">{{ book.releaseDate }}</p>
    <p class="stars">{{ book.stars }}</p>
  </div>
</template>

<style scoped>
:root {
  --blue: #254441;
  --green: #43aa8b;
  --white: #eeeeee;
}

.cards {
  font-size: 15px;
  width: 50%;
}

.cards h1 {
  text-align: center;
}

.cards .card {
  background-color: var(--blue);
  margin: auto;
  color: var(--white);
  padding: 20px;
}

.cards .card p {
  margin: 1px 0;
}
</style>
