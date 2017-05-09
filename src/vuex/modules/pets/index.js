import * as getters from './getters'
import * as actions from './actions'

import {
    ALL_PET,
    SHOW_PET,
    REGISTER_PET,
    EDIT_PET,
    REMOVE_PET

} from './mutation-types'

const initialState = {
  pets: [],
  pet: {}
}
// mutations
const mutations = {
  [ALL_PET] (state, pets) {
    state.pets = pets
  },
  [SHOW_PET] (state, pet) {
    state.pet = pet
  },
  [REGISTER_PET] (state, pet) {
    state.pet = pet
  },
  [EDIT_PET] (state, pet) {
    state.pets = state.pets.filter(p => p.id !== pet.id)
  },
  [REMOVE_PET] (state, pet) {
    state.pets = state.pets.filter(p => p.id !== pet.id)
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
