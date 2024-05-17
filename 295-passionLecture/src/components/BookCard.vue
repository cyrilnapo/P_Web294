<script setup>
/*let star = 4

function showStars() {
  let starChar = '★ '
  let stars = ''

  for (let i = 0; i < star; i++) {
    stars += starChar
  }

  return stars
}*/
</script>

<template>
  <div class="card">
    <div class="img"><img :src="book.imagePath" /></div>

    <p class="title">{{ book.title }}</p>
    <!-- <p class="abstract">{{ book.abstract }}</p> -->
    <p class="author">auteur</p>
    <p class="count_pages">{{ book.numberOfPages }} pages</p>
    <p class="edition_year">Edition Year: {{ book.editionYear }}</p>
    <a :href="book.pdfLink" target="_blank">PDF Link</a>
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
  max-width: 100%; /* Assurer que l'image ne dépasse pas la largeur de la carte */
  border-radius: 8px; /* Appliquer des coins arrondis à l'image */
  max-height: 50px;
}

.card p {
  margin: 1px 0;
  font-size: 14px; /* Réduire la taille de la police */
}

.card a {
  display: block;
  color: #43aa8b;
  margin-top: 10px;
  font-size: 14px; /* Réduire la taille de la police pour le lien */
}
</style>
