<template>
  <div class="login-container">
    <form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left"
    label-width="0px"
    class="card-box login-form">
      <h3 class="title">登录222</h3>
      <input name="name" type="text" v-model="loginForm.name" autoComplete="on"
      placeholder="用户名"/>
      <input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password"
      autoComplete="on"
      placeholder="密码">
      <button type="primary" style="width 60px;" :loading="loading" @click.native.prevent="handleLogin">
      登录
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value.trim().length < 1) {
        callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.trim().length < 1) {
        callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        name: '',
        password: ''
      },
      loginRules: {
        name: [{required: true, trigger: 'blur', validator: validateUsername}],
        password: [{required: true, trigger: 'blur', validator: validatePass}]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd () {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({path: '/'})
          }).catch((e) => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
