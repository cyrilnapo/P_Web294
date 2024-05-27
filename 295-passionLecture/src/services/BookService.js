import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNTk1NTg2NCwiZXhwIjoxNzQ3NTEzNDY0fQ.d3vf7HeTFG03bVlEK9KhTONeAmfbUQg3yd5pWhhX558'
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
    return apiClient.get(`/api/authors/${authorId}`)
  },
  getAuthors(){
    return apiClient.get(`/api/authors/`)
  },
  getBookRatings(bookId) {
    return apiClient.get(`/api/books/${bookId}/notes`)
  },
  addComment(bookId, comment) {
    return apiClient.post(`/api/books/${bookId}/comments/`, comment)
  },
  addNote(bookId, note) {
    return apiClient.post(`/api/books/${bookId}/notes/`, note)
  }
}
