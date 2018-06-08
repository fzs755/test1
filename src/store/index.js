import Vue from 'vue'
import vuex from 'vuex'
import showit from './show'
import logined from './login'
Vue.use(vuex)

export default new vuex.Store({
  modules: {
    show: showit,
    login: logined
  }
})
