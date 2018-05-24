import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/Secondpage'
import ThirdPage from '@/components/Thirdpage'
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
      path: '/one',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/two',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/three',
      name: 'ThirdPage',
      component: ThirdPage
    }
  ]
})
