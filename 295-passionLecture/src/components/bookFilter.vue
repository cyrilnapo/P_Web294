<template>
  <div class="book-filter-component">
    <h2>{{ title }}</h2>
    <div>
      <label for="category">Filtrer par genre:</label>
      <select id="category" v-model="selectedCategory">
        <option value="">Tous les genres</option>
        <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
      </select>
    </div>
    <div>
      <label for="rating">Filtrer par note:</label>
      <select id="rating" v-model="selectedRating">
        <option value="">Toutes les notes</option>
        <option v-for="rating in ratings" :key="rating" :value="rating">{{ rating }}</option>
      </select>
    </div>
    <div>
      <label for="search">Rechercher un livre:</label>
      <input type="text" id="search" v-model="searchTerm" />
    </div>
    <button @click="applyFilters">Appliquer les filtres</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Filtres de livre',
      selectedCategory: '',
      selectedRating: '',
      searchTerm: ''
    }
  },
  computed: {
    genres() {
      return ['Science-fiction']
    },
    ratings() {
      return ['1', '2', '3', '4', '5']
    }
  },
  methods: {
    applyFilters() {
      // Implémenter la logique pour appliquer les filtres
      // Utiliser selectedCategory, selectedRating et searchTerm
    }
  }
}
</script>

<style scoped>
.book-filter-component {
  max-width: 100%;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  align-items: center;
  text-align: center;
}

.book-filter-component h2 {
  text-align: center;
  margin-bottom: 20px;
}

.book-filter-component div {
  margin-bottom: 10px;
}

.book-filter-component label {
  font-weight: bold;
}

.book-filter-component select,
.book-filter-component input {
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

.book-filter-component button {
  padding: 8px 15px;
  background-color: #43aa8b;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.book-filter-component button:hover {
  background-color: #43aa8b;
}
</style>
