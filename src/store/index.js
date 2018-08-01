import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({ // 向外暴露一个由Actions State Mutations 三个组成的系统对象
  state: state,
  mutations: mutations
})
