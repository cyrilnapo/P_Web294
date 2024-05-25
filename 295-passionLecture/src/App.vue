<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/add">Ajouter</RouterLink>
        <RouterLink to="/AllBooksView">Ouvrages</RouterLink>
        <RouterLink to="/comment">Commenter (ici temporairement)</RouterLink>
        <RouterLink to="/deletePage">supprimer </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  margin: 10px;
  max-height: 100vh;
}

.logo {
  display: block;
}

nav {
  width: 100%;
  font-size: 22px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline;
  padding: 0 1rem;
  border-left: 1px solid var (--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
