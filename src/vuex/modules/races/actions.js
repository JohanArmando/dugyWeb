import {
    ALL_RACE,
    REGISTER_RACE,
    SHOW_RACE,
    EDIT_RACE,
    REMOVE_RACE
} from './mutation-types'

import axios from '../../../services/axios'

export function allRaces ({ commit }, pets) {
  return new Promise((resolve, reject) => {
    axios.get('/races')
    .then(response => {
      commit(ALL_RACE, response.data)
      console.log(response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in races')
      reject(error)
    })
  })
}

export function registerRace ({ commit }, form) {
  console.log(form)
  return new Promise((resolve, reject) => {
    axios.post('/races', form)
    .then(response => {
      window.$toast.success('Datos guardados correctamente')
      console.log(response.data)
      commit(REGISTER_RACE, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in register races')
      reject(error)
    })
  })
}

export function showRace ({ commit }, id) {
  return new Promise((resolve, reject) => {
    axios.get('/races/' + id)
    .then(response => {
      console.log(response.data)
      commit(SHOW_RACE, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in race')
      reject(error)
    })
  })
}

export function editRace ({ commit }, race) {
  return new Promise((resolve, reject) => {
    axios.put('/races/' + race.id, race)
    .then(response => {
      window.$toast.success('Datos modificados correctamente')
      console.log(response.data)
      commit(EDIT_RACE, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in edit race')
      reject(error)
    })
  })
}

export function deleteRace ({ commit }, race) {
  return new Promise((resolve, reject) => {
    axios.delete('/races/' + race.id)
    .then(response => {
      window.$toast.error('Se ha eliminado correctamente')
      console.log(response.data)
      commit(REMOVE_RACE, race)
      resolve(response)
    })
    .catch(error => {
      console.log('error in delete race')
      reject(error)
    })
  })
}
