// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import About from './About'
import InsureCar from './insure-car'
import InsureCarResult from './insure-car-result'

import Vuex from 'vuex'
Vue.use(Vuex)

// plugins
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/about',
  component: About
}, {
  path: '/insure/car',
  component: InsureCar
}, {
  path: '/insure/car/result',
  component: InsureCarResult
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
