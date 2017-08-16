import request from 'axios'

request.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'

const getTopics = ({ commit, state }) => {
  return request.get('posts').then((response) => {
    if (response.statusText === 'OK') {
      commit('TOPICS_LIST', response.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}

const increment = ({ commit }) => commit('INCREMENT')
const decrement = ({ commit }) => commit('DECREMENT')

export default {
  getTopics,
  increment,
  decrement,
}
