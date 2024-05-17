<script setup>
import BookCard from '@/components/BookCard.vue'
import CommentSection from '@/components/CommentSection.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <div class="container">
      <CommentSection />
      <BookCard />
    </div>
  </div>
  <footer>Ce site a été créé par M.Velickovic, A.Zeqiri, C.Napoleone, Y.Cardis</footer>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  align-items: stretch;
  gap: 40px;
}
</style>
