import * as getters from './getters'
import * as actions from './actions'

import {
    ALL_SIZE,
    SHOW_SIZE,
    REGISTER_SIZE,
    EDIT_SIZE,
    REMOVE_SIZE

} from './mutation-types'

const initialState = {
  sizes: [],
  size: {}
}
// mutations
const mutations = {
  [ALL_SIZE] (state, sizes) {
    state.sizes = sizes
  },
  [SHOW_SIZE] (state, size) {
    state.size = size
  },
  [REGISTER_SIZE] (state, size) {
    state.size = size
  },
  [EDIT_SIZE] (state, size) {
    state.sizes = state.sizes.filter(s => s.id !== size.id)
  },
  [REMOVE_SIZE] (state, size) {
    state.sizes = state.sizes.filter(s => s.id !== size.id)
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
