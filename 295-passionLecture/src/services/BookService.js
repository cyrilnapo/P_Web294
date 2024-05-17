import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDczNzc2NjksImV4cCI6MTczODkzNTI2OX0.TFfSqdT9M2QqJxqgLROuXFIbTfBtYV8B2Vl4Gmeb7EI'
  }
})

export default {
  getBooks() {
    return apiClient.get('/api/Books')
  },
  getBook(id) {
    return apiClient.get('/api/Books/' + id)
  },
  createBook(newBook) {
    return apiClient.post('/api/Books/', newBook)
  },
  editBook(id, updatedBook) {
    return apiClient.put('/api/Books/' + id, updatedBook)
  },
  deleteBook(id) {
    return apiClient.delete('/api/Books/' + id)
  },
  getCategory(categoryId) {
    return apiClient.get(`/api/Categories/${categoryId}`)
  },

  getAuthor(authorId) {
    return apiClient.get(`/api/authors/${categoryId}`)
  }
}
