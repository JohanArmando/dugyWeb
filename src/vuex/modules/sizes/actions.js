import {
    ALL_SIZE,
    REGISTER_SIZE,
    REMOVE_SIZE
} from './mutation-types'

import axios from '../../../services/axios'

export function allSizes ({ commit }, pets) {
  return new Promise((resolve, reject) => {
    axios.get('/sizes')
    .then(response => {
      commit(ALL_SIZE, response.data)
      console.log(response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in sizes')
      reject(error)
    })
  })
}

export function registerSize ({ commit }, form) {
  console.log(form)
  return new Promise((resolve, reject) => {
    axios.post('/sizes', form)
    .then(response => {
      window.$toast.success('Datos guardados correctamente')
      console.log(response.data)
      commit(REGISTER_SIZE, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in register sizes')
      reject(error)
    })
  })
}

export function deleteSize ({ commit }, size) {
  return new Promise((resolve, reject) => {
    axios.delete('/sizes/' + size.id)
    .then(response => {
      window.$toast.error('Se ha eliminado correctamente')
      console.log(response.data)
      commit(REMOVE_SIZE, size)
      resolve(response)
    })
    .catch(error => {
      console.log('error in delete size')
      reject(error)
    })
  })
}
