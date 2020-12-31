import { createStore } from 'vuex'
// import { getters } from './getters'
import { user } from './modules/user'
import { menus } from './modules/menus'

export default createStore({
  // state: {},
  // getters,
  // mutations: {},
  // actions: {},
  modules: {
    user,
    menus,
  },
})
