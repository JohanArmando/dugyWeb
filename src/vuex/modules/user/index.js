import * as getters from './getters'
import * as actions from './actions'

import {
    LOGIN,
    REGISTER_USER,
    SESSION,
    LOGOUT,
    SIGNUP,
    ALL,
    USER,
    USER_EDIT,
    REMOVE_USER
} from './mutation-types'

const initialState = {
  stateLogin: false,
  user: {
    name: '',
    email: ''
  },
  users: [],
  current: {}
}

// mutations
const mutations = {
  [LOGIN] (state, user) {
    state.user = user
    state.stateLogin = true
  },
  [REGISTER_USER] (state, user) {
    state.user = user
    state.stateLogin = true
  },
  [SESSION] (state, user) {
    state.user = user
    state.stateLogin = true
  },
  [LOGOUT] (state, user) {
    state.user = {
      name: '',
      email: ''
    }
    state.stateLogin = false
  },
  [SIGNUP] (state, user) {
    state.user = user
    state.stateLogin = true
  },
  [ALL] (state, users) {
    state.users = users
  },
  [USER] (state, current) {
    state.current = current
  },
  [USER_EDIT] (state, current) {
    state.users = state.users.filter(u => u.id !== current.id)
    state.current = current
    if (state.current.id === state.user.id) {
      state.user = state.current
    }
  },
  [REMOVE_USER] (state, user) {
    state.users = state.users.filter(u => u.id !== user.id)
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
