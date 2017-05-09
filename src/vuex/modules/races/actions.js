import {
    ALL_RACE,
    REGISTER_RACE,
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
    axios.post('/races', { name: form.name, color: form.color, born_date: form.born_date, user_id: form.user_id, race_id: form.race_id })
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
