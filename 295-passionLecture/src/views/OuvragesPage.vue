<script setup>
import eader from '../components/header.vue'
import bookFilter from '../components/bookFilter.vue'
import BookCard from '@/components/BookCard.vue'
</script>

<template>
  <div class="container">
    <header>
      <div class="filter"><bookFilter></bookFilter></div>
      <div class="header"><eader></eader></div>
    </header>
    <main class="main">
      <ul class="book-list">
        <li class="book-card"><BookCard></BookCard></li>
        <li class="book-card"><BookCard></BookCard></li>
        <li class="book-card"><BookCard></BookCard></li>
        <li class="book-card"><BookCard></BookCard></li>
      </ul>
    </main>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'filter main';
  height: 100vh;
}
header {
  display: flex;
}
.header {
  grid-area: header;
  width: 100%;
}

.filter {
  grid-area: filter;
}

.main {
  grid-area: main;
}
.book-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.book-card {
  flex: 0 0 calc(45% - 10px);
  margin: 10px;
}
footer {
  padding: 10%;
  text-align: center;
}
</style>
