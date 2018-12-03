import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/Secondpage'
import ThirdPage from '@/components/Thirdpage'
import FourthPage from '@/components/Fourthpage'
import FifthPage from '@/components/FifthPage'
import LoginPage from '@/components/Loginpage'
import Regidit from '@/components/Regidit'
import Ball from '@/components/ball'
import Cart from '@/components/Cart'
import axios from 'axios'
// import store from '../store/index.js'

Vue.prototype.$http = axios
Vue.use(Router)
Vue.use(Vuex)

/* Router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullpath}
      })
    }
  } else {
    next()
  }
}) */

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/1',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/2',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/3',
      name: 'ThirdPage',
      component: ThirdPage
    },
    {
      path: '/4',
      name: 'FourthPage',
      component: FourthPage
    },
    {
      path: '/5',
      name: 'FifthPage',
      component: FifthPage
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/ball',
      name: 'Ball',
      component: Ball
    },
    {
      path: '/reg',
      name: 'Regidit',
      component: Regidit
    }
  ]
})
