<template>
  <div class="book-filter">
    <input
      v-model="searchTerm"
      @input="handleSearch"
      type="text"
      placeholder="Rechercher un livre..."
    />
    <select v-model="selectedCategory" @change="handleCategoryChange">
      <option value="">Toutes les catégories</option>
      <option v-for="category in categories" :value="category.id" :key="category.id">
        {{ category.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['search'])

const searchTerm = ref('')
const selectedCategory = ref('')

const handleSearch = () => {
  emit('search', searchTerm.value)
}

const handleCategoryChange = () => {
  emit('categoryChange', selectedCategory.value)
}
</script>

<style scoped>
.book-filter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.book-filter input {
  width: 50%;
  padding: 5px;
}

.book-filter select {
  width: 40%;
  padding: 5px;
}
</style>
