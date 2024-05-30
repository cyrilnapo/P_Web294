import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// Récupérer le token du localStorage
const token = localStorage.getItem('token')
if (token) {
  // Ajouter le token dans les en-têtes des requêtes
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default {
  getCategoryById(categoryId) {
    return apiClient.get(`/api/Categories/${categoryId}`)
  },
  getCategories() {
    return apiClient.get(`/api/Categories`)
  }
}
