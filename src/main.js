import Vue from 'vue'
import Vuex from 'vuex';
import { APP_STORE } from '../store';
import VueRouter from 'vue-router'
import App from './App.vue'

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
Vue.use(Chartkick.use(Chart))

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);



import MainPage from './components/MainPage.vue'
import Login from './components/Login.vue'
import Registration from './components/Registration.vue'
import PageNotFound from './components/PageNotFound.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: MainPage },
  { path: '/registration', component: Registration },
  { path: '/login', component: Login },
  { path: '/404', component: PageNotFound }, { path: '*', redirect: '/404' }
]

const router = new VueRouter({
  mode: 'history',
  routes, // сокращённая запись для `routes: routes`
})

const store = new Vuex.Store(APP_STORE);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
