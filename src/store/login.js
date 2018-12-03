export default {
  state: {
    logined: false,
    exlogineduser: {
      name: '',
      avatar: '',
      username: ''
    }
  },
  mutations: {
    LOGIN (state) {
      state.logined = true
      let user = JSON.parse(sessionStorage.getItem('user'))
      state.logineduser.name = user.name
      state.logineduser.avatar = user.avatar
      state.logineduser.username = user.username
    },
    LOGOUT (state) {
      state.logined = true
      state.logineduser.name = ''
      state.logineduser.avatar = ''
      state.logineduser.username = ''
    }
  },
  action: {
    login (context) {
      context.commit('LOGIN')
    },
    logout (context) {
      context.commit('LOGOUT')
    }
  }
}
