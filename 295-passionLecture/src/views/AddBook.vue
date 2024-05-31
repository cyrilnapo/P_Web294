<script setup>
import { ref, onMounted } from 'vue'
import BookService from '../services/BookService.js'

const imagePath = ref('')
const title = ref('')
const numberOfPages = ref('')
const editor = ref('')
const editionYear = ref('')
const categoryId = ref('')
const authorId = ref('')
const isAuthenticated = ref(false)
const userId = ref(null)

const checkAuthentication = () => {
  const token = localStorage.getItem('token')
  if (token) {
    const user = JSON.parse(localStorage.getItem('user'))
    userId.value = user.id
    isAuthenticated.value = true
  }
}

onMounted(() => {
  checkAuthentication()
})

const handleSubmit = async (event) => {
  event.preventDefault()

  const formData = new FormData()
  formData.append('title', title.value)
  formData.append('numberOfPages', numberOfPages.value)
  formData.append('pdfLink', 'pdfLink') // Assurez-vous de remplacer cela par une URL valide ou gérer cela côté backend
  formData.append('abstract', 'abstract') // Idem pour l'abstract
  formData.append('editor', editor.value)
  formData.append('editionYear', editionYear.value)
  formData.append('categoryId', categoryId.value)
  formData.append('imagePath', imagePath.value)
  formData.append('authorId', authorId.value)
  formData.append('userId', userId.value)

  try {
    const response = await BookService.createBook(formData)
    console.log('Livre ajouté avec succès:', response.data)
    window.location.href = '../UserBook'
  } catch (error) {
    console.error("Erreur lors de l'ajout du livre:", error)
  }
}
</script>

<template>
  <div class="add">
    <form @submit="handleSubmit">
      <p>Image</p>
      <input type="text" v-model="imagePath" />
      <p>Titre</p>
      <input type="text" v-model="title" />
      <p>Nombre de pages</p>
      <input type="text" v-model="numberOfPages" />
      <p>Editeur</p>
      <input type="text" v-model="editor" />
      <p>Année d'édition</p>
      <input type="text" v-model="editionYear" />
      <p>Catégorie</p>
      <input type="text" v-model="categoryId" />
      <p>Auteur</p>
      <input type="text" v-model="authorId" />
      <button type="submit">Ajouter</button>
    </form>
  </div>
  <footer>Ce site a été créé par M.Velickovic, A.Zeqiri, C.Napoleone, Y.Cardis</footer>
</template>

<style scoped>
:root {
  --blue: #254441;
  --green: #43aa8b;
  --white: #eeeeee;
}

.add {
  width: 100%;
}

.add form {
  display: block;
  margin: auto;
}

.add form input {
  border: 0;
  background-color: var(--blue);
  color: var(--white);
  padding: 5px 10px 5px 10px;
}
</style>
