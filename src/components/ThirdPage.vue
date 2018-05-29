<template>
  <div>
    <Header></Header>
    <div class= "overbox">
      <span v-for="item in lists" :key= "item">
        <img :src= "item.img" class= "pic">
      </span>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue'
export default {
  data () {
    return {
      lists: [
        { img: '../../static/img/showpic (1).jpg' },
        { img: '../../static/img/showpic (2).jpg' },
        { img: '../../static/img/showpic (3).jpg' },
        { img: '../../static/img/showpic (4).jpg' },
        { img: '../../static/img/showpic (5).jpg' },
        { img: '../../static/img/showpic (6).jpg' },
        { img: '../../static/img/showpic (7).jpg' },
        { img: '../../static/img/showpic (8).jpg' },
        { img: '../../static/img/showpic (9).jpg' },
        { img: '../../static/img/showpic (10).jpg' },
        { img: '../../static/img/showpic (16).jpg' },
        { img: '../../static/img/Pic3.jpg' }
      ]
    }
  },
  components: {
    Header
  },
  methods: {
  }
}
</script>
<style  lang="stylus" scoped>
 @import '../style/ShowPic'
</style>
