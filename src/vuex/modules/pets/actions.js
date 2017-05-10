import {
    ALL_PET,
    REGISTER_PET,
    SHOW_PET,
    EDIT_PET,
    REMOVE_PET
} from './mutation-types'

import axios from '../../../services/axios'

export function allPets ({ commit }, pets) {
  return new Promise((resolve, reject) => {
    axios.get('/pets')
    .then(response => {
      commit(ALL_PET, response.data)
      console.log(response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in pets')
      reject(error)
    })
  })
}

export function registerPet ({ commit }, form) {
  console.log(form)
  return new Promise((resolve, reject) => {
    axios.post('/pets', form)
    .then(response => {
      window.$toast.success('Datos guardados correctamente')
      console.log(response.data)
      commit(REGISTER_PET, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in register pets')
      reject(error)
    })
  })
}

export function showPet ({ commit }, id) {
  return new Promise((resolve, reject) => {
    axios.get('/pets/' + id)
    .then(response => {
      console.log(response.data)
      commit(SHOW_PET, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in pet')
      reject(error)
    })
  })
}

export function editPet ({ commit }, pet) {
  return new Promise((resolve, reject) => {
    axios.put('/pets/' + pet.id, pet)
    .then(response => {
      window.$toast.success('Datos modificados correctamente')
      console.log(response.data)
      commit(EDIT_PET, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in edit pet')
      reject(error)
    })
  })
}

export function deletePet ({ commit }, pet) {
  return new Promise((resolve, reject) => {
    axios.delete('/pets/' + pet.id)
    .then(response => {
      window.$toast.error('Se ha eliminado correctamente')
      console.log(response.data)
      commit(REMOVE_PET, pet)
      resolve(response)
    })
    .catch(error => {
      console.log('error in delete pet')
      reject(error)
    })
  })
}
