import Vue from 'vue'
import vuex from 'vuex'
import showit from './show'
import logined from './login'
import cart from './modules/cart'
import products from './modules/products'
import createLogger from '../plugins/logger'
Vue.use(vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new vuex.Store({
  modules: {
    show: showit,
    login: logined,
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
