import socketIOClient from 'socket.io-client'
import sailsIOClient from 'sails.io.js'

var io = sailsIOClient(socketIOClient)
io.sails.url = 'http://api.dugy.co'

import {
    LOGIN,
    SESSION,
    LOGOUT,
    SIGNUP,
    REGISTER_USER,
    ALL,
    USER,
    USER_EDIT,
    REMOVE_USER,
    ALL_RACE
} from './mutation-types'

import axios from '../../../services/axios'

export function login ({ commit }, user) {
  return new Promise((resolve, reject) => {
    axios.post('/auth/login', user)
    .then(response => {
      console.log(response.data)
      commit(LOGIN, response.data.user)
      localStorage.token = response.data.token
      axios.defaults.headers.Authorization = 'Bearer ' + response.data.token
      // io.sails.headers.Autorization = 'Bearer ' + localStorage.token
      resolve(response.data.user)
    })
    .catch(error => {
      console.log('error in login')
      reject(error)
    })
  })
}

export function register ({ commit }, form) {
  console.log(form)
  return new Promise((resolve, reject) => {
    axios.post('/users', form)
    .then(response => {
      console.log(response.data)
      commit(REGISTER_USER, response.data.user)
      localStorage.token = response.data.token
      axios.defaults.headers.Authorization = 'Bearer ' + response.data.token
      resolve(response.data.user)
    })
    .catch(error => {
      console.log('error in register')
      reject(error)
    })
  })
}

export function showUser ({ commit }, id) {
  return new Promise((resolve, reject) => {
    axios.get('/users/' + id)
    .then(response => {
      console.log(response.data)
      commit(USER, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in users')
      reject(error)
    })
  })
}

export function editUser ({ commit }, user) {
  return new Promise((resolve, reject) => {
    axios.put('/users/' + user.id, user)
    .then(response => {
      window.$toast.success('Datos modificados correctamente')
      console.log(response.data)
      commit(USER_EDIT, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in edit user')
      reject(error)
    })
  })
}

export function listUsers ({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/users')
    .then(response => {
      console.log(response.data)
      commit(ALL, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in users')
      reject(error)
    })
  })
}

export function deleteUser ({ commit }, user) {
  return new Promise((resolve, reject) => {
    axios.delete('/users/' + user.id)
    .then(response => {
      window.$toast.error('Se ha eliminado correctamente')
      console.log(response.data)
      commit(REMOVE_USER, user)
      resolve(response)
    })
    .catch(error => {
      console.log('error in delete user')
      reject(error)
    })
  })
}

export function session ({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/auth/user')
    .then(response => {
      commit(SESSION, response.data.user)
      resolve(response.data.user)
    })
    .catch(error => {
      delete localStorage.token
      console.log('error')
      reject(error)
    })
  })
}

export function signup ({ commit }, user) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      commit(SIGNUP, user)
      localStorage.token = Math.random().toString(36).substring(7)
      resolve(user)
    }, 1000)
  })
}

export function logout ({ commit }, user) {
  return new Promise((resolve, reject) => {
    delete localStorage.token
    commit(LOGOUT, user)
    resolve(user)
  })
}

// websockets
export function racesSockets ({ commit }) {
  io.socket.get('/api/v1/races', function serverResponded (body, JWR) {
    console.log('Sails responded with 2: ', body)
    console.log('with headers: ', JWR.headers)
  })
  io.socket.on('races', message => {
    console.log('hola')
    console.log(message)
    switch (message.verb) {
      case 'created':
        commit(ALL_RACE, message.data)
        break
    }
    console.log(message)
  })
}
