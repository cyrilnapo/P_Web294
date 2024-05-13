<script setup></script>

<template>
  <div class="cards">
    <div class="card">
      <img src="../../resource/img/harry_potter.png" />
      <p class="title">Harry Potter à l'école des sorciers</p>
      <p class="genre">Science-fiction</p>
      <p class="author">J.K. Rowling</p>
      <p class="count_pages">225 pages</p>
      <p class="release_date">Octobre 2017</p>
      <p class="stars">X X X X</p>
    </div>
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
  margin: 1px 0; /* Réglez cette valeur selon vos besoins */
}
</style>
