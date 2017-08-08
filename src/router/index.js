import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Counter from '../views/Counter.vue'
import Topics from '../views/Topics.vue'

// dynamic
const About = () => import('../views/About.vue')

Vue.use(VueRouter)

export function createRouter () {
  return new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', component: Home },
      { path: '/Topics', component: Topics },
      { path: '/Counter', component: Counter },
      { path: '/About', component: About },
    ],
  })
}
