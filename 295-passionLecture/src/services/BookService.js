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
  }
}
