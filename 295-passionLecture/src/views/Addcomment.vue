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
