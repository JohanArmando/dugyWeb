import {
    ALL_PLAN,
    SHOW,
    REGISTER,
    REMOVE_PLAN,
    EDIT_PLAN
} from './mutation-types'

import axios from '../../../services/axios'

export function allPlans ({ commit }, plans) {
  return new Promise((resolve, reject) => {
    axios.get('/plans')
    .then(response => {
      commit(ALL_PLAN, response.data)
      console.log(response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in plans')
      reject(error)
    })
  })
}

export function registerPlan ({ commit }, form) {
  console.log(form)
  return new Promise((resolve, reject) => {
    axios.post('/plans', form)
    .then(response => {
      window.$toast.success('Datos guardados correctamente')
      console.log(response.data)
      commit(REGISTER, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in register plans')
      reject(error)
    })
  })
}

export function showPlan ({ commit }, id) {
  return new Promise((resolve, reject) => {
    axios.get('/plans/' + id)
    .then(response => {
      console.log(response.data)
      commit(SHOW, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error SHOW PLANS')
      reject(error)
    })
  })
}

export function editPlan ({ commit }, plan) {
  return new Promise((resolve, reject) => {
    axios.put('/plans/' + plan.id, { name: plan.name, price: plan.price, logo: plan.logo, expiration_days: plan.expiration_days })
    .then(response => {
      window.$toast.success('Datos modificados correctamente')
      console.log(response.data)
      commit(EDIT_PLAN, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error in EDIT PLANS')
      reject(error)
    })
  })
}

export function deletePlan ({ commit }, plan) {
  return new Promise((resolve, reject) => {
    axios.delete('/plans/' + plan.id)
    .then(response => {
      window.$toast.error('Se ha eliminado correctamente')
      console.log(response.data)
      commit(REMOVE_PLAN, plan)
      resolve(response)
    })
    .catch(error => {
      console.log('error in delete plan')
      reject(error)
    })
  })
}
