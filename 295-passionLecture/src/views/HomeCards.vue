<script setup>
import BookCard from '@/components/BookCard.vue'
</script>

<template>
  <main>
    <h1>NOS RÉCENTS OUVRAGES</h1>
    <div>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  </main>
</template>

<style scoped>
main {
  width: 55%;
}

h1 {
  text-align: center;
}

div {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}
</style>
