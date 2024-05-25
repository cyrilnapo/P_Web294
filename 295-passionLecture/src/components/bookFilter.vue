<template>
  <div class="book-filter">
    <input
      v-model="searchTerm"
      @input="handleSearch"
      type="text"
      placeholder="Rechercher un livre..."
    />
    <p>
      <label style="display: none" for="section"></label>
      <select v-model="newTeacher.fkSection" name="section" id="section">
        <option
          v-for="section in sections"
          v-bind:key="section.id"
          v-bind:section="section"
          v-bind:value="section.id"
        >
          {{ section.name }}
        </option>
      </select>
    </p>
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
