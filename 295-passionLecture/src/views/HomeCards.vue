<template>
  <div class="cards">
    <h1>NOS RÉCENTS OUVRAGES</h1>
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

<style>
:root {
  --blue: #254441;
  --green: #43aa8b;
  --white: #eeeeee;
}

@media (min-width: 1024px) {
  .cards {
    font-size: 20px;
    width: 55%;
  }

  .cards h1 {
    text-align: center;
  }

  .cards .card {
    line-height: 1;
    white-space: pre-line;
    width: 35%;
    background-color: var(--blue);
    color: var(--white);
    padding: 10px;
  }
}
</style>
