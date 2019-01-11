<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="userName" v-model="userName"> <br>
      <input type="text" name="age" v-model="password"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
    </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: '',
      password: ''
    }
  },
  methods: {
    addUser () {
      var userName = this.userName
      var password = this.password
      this.$http.post('/api/user/addUser', {
        userName: userName,
        password: password
      }, {}).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
