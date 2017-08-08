import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  topics: [],
  count: 0,
}

// const inBrowser = typeof window !== 'undefined'
//
// // if in browser, use pre-fetched state injected by SSR
// const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

export function createStore () {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
  })
}
