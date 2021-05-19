import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = () => new Vuex.Store({
  state: {
    ossConfig: {}
  },
  mutations: {
    SET_OSS_CONFIG(state, config) {
      state.ossConfig = config
    }
  }
})
export default store
