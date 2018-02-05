import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import weatherMixin from './mixins/weatherMixin'
import axios from 'axios'

// Para un mejor manejo de las peticiones al API
Vue.prototype.$http = axios

// Registramos el mixin que maneja la lógica de la comunicación con OpenWeatherAPI
Vue.mixin(weatherMixin)

// Componentes de ruta
const Weather = () => import('./components/Weather.vue')
const Crypto = () => import('./components/Crypto.vue')

const routes = [
  { path: '/', name: 'Weather', component: Weather },
  { path: '/crypto-check', name: 'Crypto', component: Crypto }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// Registramos Vue Router
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
