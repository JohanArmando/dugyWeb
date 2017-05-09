import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user/index'
import plans from './modules/plans/index'
import pets from './modules/pets/index'
import races from './modules/races/index'
import sizes from './modules/sizes/index'
import app from './modules/app/index'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  modules: {
    plans,
    user,
    pets,
    races,
    sizes,
    app
  },
  strict: debug
})
