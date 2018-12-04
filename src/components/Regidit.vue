<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="username" v-model="user_name"> <br>
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
      user_name: '',
      password: ''
    }
  },
  methods: {
    addUser () {
      var name = this.user_name
      var password = this.password
      this.$http.post('/api/user/addUser', {
        user_name: name,
        password: password
      }, {}).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
