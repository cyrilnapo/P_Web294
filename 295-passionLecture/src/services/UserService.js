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
  getUserById(userId) {
    return apiClient.get(`/api/users/${userId}`)
  },
  getCommentCount(userId) {
    return apiClient.get(`/api/users/${userId}/comment-count`)
  },
  getBookCount(userId) {
    return apiClient.get(`/api/users/${userId}/book-count`)
  },
  login(username, password) {
    return apiClient.post('/api/login/', { username, password })
  }
}
