<script setup>
let star = 4

function showStars() {
  let starChar = '★ '
  let stars = ''

  for (let i = 0; i < star; i++) {
    stars += starChar
  }

  return stars
}
</script>

<template>
  <div class="cards">
    <div class="card">
      <img src="../../resource/img/harry_potter.png" />
      <p class="title">Harry Potter à l'école des sorciers</p>
      <p class="genre">Science-fiction</p>
      <p class="author">J.K. Rowling</p>
      <p class="count_pages">225 pages</p>
      <p class="release_date">Octobre 2017</p>
      <p class="stars">{{ showStars() }}</p>
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
  font-size: 14px;
  width: 50%;
}

.cards h1 {
  text-align: center;
}

.cards .card {
  background-color: var(--blue);
  margin: auto;
  color: var(--white);
  padding: 15px;
  margin: 5px 0px 0px 0px;
}

.cards .card p {
  margin: 1px 0;
}

.cards .card .stars {
  color: #c5bb31;
  font-size: 1.2rem;
}
</style>
