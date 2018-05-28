<template>
  <div>
    <Header></Header>
    <p>输入你要的东西</p>
    <input type="text" autofocus >
    <p><input
      type="checkbox">
    </p>
      <img src="../../static/img/icon1.jpg" height="100" width="100" alt="icon1" @click="onclick">
      <img src="../../static/img/icon2.jpg" height="100" width="100" alt="icon2" @click="onclick">
    <!-- <img :src= 'xname' height="100" width="100" alt="" @click="onclick"> -->
    <p><span v-for="(item, index) in items" :key="index">
      <!-- <img v-if="checkedvalue === index" id="SetDefaultPic" height="100" width="100" alt="" @click="onclick"> -->
      <img  name= "SetPic" height="100" width="100" alt="" src="../../static/img/icon4.jpg">
    </span></p>
    <p v-for="(item, index) in items" :key="index"> <input type="radio" name="group1" v-model="checkedvalue" :value= index> {{item}} </p>
    <p>
      <a @click="GoOne">返回主页</a>
      <!-- <a onclick="alert('a')">返回主页</a> -->
    </p>
    <span>Picked: {{ checkedvalue+1 }}</span>
  </div>
</template>
<script>
import Header from './Header.vue'
export default {
  data () {
    return {
      checkedvalue: '',
      items: ['领子', '袖子', '前身', '后身', '门襟', '饰品'],
      xname: '',
      yname: '../../static/img/icon4.jpg'
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
      document.getElementsByName('SetPic')[this.checkedvalue].setAttribute('src', this.xname)
      // alert(this.xname)
    }
  },
  computed: {
  }
}
</script>
<style  lang="stylus" scoped>
</style>
