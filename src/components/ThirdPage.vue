<template>
  <div class="whole">
    <Header1></Header1>
    <Header></Header>
    <div class= "overbox">
      <span v-for="item in lists" :key= "item">
        <img :src= "item.img" class= "pic" @click= "click1">
      </span>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './Header.vue'
import Header1 from './Header1.vue'
import Footer from './Footer.vue'
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
    Header, Header1, Footer
  },
  beforeMount () {
    document.getElementsByTagName('body')[0].setattribute('className', 'asdf')
  },
  beforeDestroy () {
    document.body.removeAttribute('x')
  },
  methods: {
    click1: function () {
      window.location.href = event.srcElement.src
    }
  }
  /* mounted: function () {
    this.getElementsByTagName('div')[0].style.background = 'red'
  } */
}
</script>
<style  lang="stylus" scoped>
 @import '../style/ShowPic'
  .asdf{
    margin:300;
    border:0;
    background: black
 }
</style>
