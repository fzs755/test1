export default {
  state: {
    token: null
  },
  mutations: {
    login: (state, data) => {
      localStorage.token = data
      state.token = data
    },
    logout: (state, data) => {
      localStorage.removeItem('token')
      state.token = null
    }
  }
}
