<script setup>
import HomeCards from './HomeCards.vue'
import HomeText from './HomeText.vue'
</script>

<template>
  <div class="main">
    <HomeCards></HomeCards>
    <HomeText></HomeText>
  </div>
</template>

<style>
.main {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
}
</style>
