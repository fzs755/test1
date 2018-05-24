<template>
  <div>
    <Header></Header>
    <p>输入你要的东西</p>
    <input type="text" autofocus >
    <p><input
      type="checkbox"
      v-bind:checked="checked">
    </p>
      <img src="../../static/img/icon1.jpg" height="100" width="100" alt="icon1" @click="onclick">
      <img src="../../static/img/icon2.jpg" height="100" width="100" alt="icon2" @click="onclick">
    <!-- <img :src= 'xname' height="100" width="100" alt="" @click="onclick"> -->
    <p><span v-for="(item, index) in items" :key="index"> <img :src= 'xname' height="100" width="100" alt="" @click="onclick"></span></p>
    <p v-for="(item, index) in items" :key="index"> <input type="radio" check="checked" name="group1"> {{index}}. {{item}}</p>
    <p>
      <a @click="GoOne">返回主页</a>
      <!-- <a onclick="alert('a')">返回主页</a> -->
    </p>
  </div>
</template>
<script>
import Header from './Header.vue'
export default {
  data () {
    return {
      items: [1, 31, 3, 4, 5, 6],
      xname: ''
    }
  },
  components: {
    Header
  },
  methods: {
    GoOne: function () {
      this.$router.push({path: '/one'})
    },
    onclick: function () {
      this.xname = event.srcElement.src
      alert(this.xname)
    }
    /* ChoosePic () {
      let x = ''
      onclick(function () {
        this.ShowRightIcon = true
        x.src = this.src
      })
    } */
  }
}
</script>
<style  lang="stylus" scoped>
</style>
