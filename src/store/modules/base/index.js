import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  topics: [],
  count: 0,
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
