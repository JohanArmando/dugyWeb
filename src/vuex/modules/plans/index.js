import * as getters from './getters'
import * as actions from './actions'

import {
    ALL_PLAN,
    SHOW,
    REGISTER,
    REMOVE_PLAN,
    EDIT_PLAN
} from './mutation-types'

const initialState = {
  plans: [],
  plan: {}
}
// mutations
const mutations = {
  [ALL_PLAN] (state, plans) {
    state.plans = plans
  },
  [SHOW] (state, plan) {
    state.plan = plan
  },
  [REGISTER] (state, plan) {
    state.plan = plan
  },
  [EDIT_PLAN] (state, plan) {
    state.plan = plan
  },
  [REMOVE_PLAN] (state, plan) {
    state.plans = state.plans.filter(p => p.id !== plan.id)
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
