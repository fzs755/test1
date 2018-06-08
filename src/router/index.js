import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/Secondpage'
import ThirdPage from '@/components/Thirdpage'
import FourthPage from '@/components/Fourthpage'
import LoginPage from '@/components/Loginpage'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})
