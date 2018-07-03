import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from './modules/login.js'

export default new Vuex.Store({
  strict: true,
  modules: {
    login
  },
  state: {

  },
  mutations: {
    toWhat(state, isXX) {
      state.isFour = isXX[0];
      state.isFive = isXX[1];
    }
  }
})
