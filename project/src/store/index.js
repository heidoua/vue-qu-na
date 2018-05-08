import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    city: '北京'
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})

export default store
