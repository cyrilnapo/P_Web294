<script setup>
import HomeCards from './HomeCards.vue'
import HomeText from './HomeText.vue'
</script>

<template>
  <div class="main">
    <HomeCards></HomeCards>
    <HomeText></HomeText>
  </div>
  <footer>Ce site a été créé par M.Velickovic, A.Zeqiri, C.Napoleone, Y.Cardis</footer>
</template>

<style>
.main {
  display: flex;
  flex-direction: row-reverse;
}
</style>
