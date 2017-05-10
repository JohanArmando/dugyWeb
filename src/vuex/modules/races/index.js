import * as getters from './getters'
import * as actions from './actions'

import {
    ALL_RACE,
    SHOW_RACE,
    REGISTER_RACE,
    EDIT_RACE,
    REMOVE_RACE

} from './mutation-types'

const initialState = {
  races: [],
  race: {}
}
// mutations
const mutations = {
  [ALL_RACE] (state, races) {
    state.races = races
  },
  [SHOW_RACE] (state, race) {
    state.race = race
  },
  [REGISTER_RACE] (state, race) {
    state.race = race
  },
  [EDIT_RACE] (state, race) {
    state.races = state.races.filter(r => r.id !== race.id)
    state.race = race
    if (state.race.id === state.race.id) {
      state.race = state.race
    }
  },
  [REMOVE_RACE] (state, race) {
    state.races = state.races.filter(r => r.id !== race.id)
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
