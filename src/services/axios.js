import axios from 'axios'

export default axios.create({
  baseURL: 'http://api.dugy.co/api/v1',
  timeout: 5000,
  headers: {
    'Authorization': 'Bearer ' + localStorage.token,
    'Content-Type': 'application/json'
  }
})
