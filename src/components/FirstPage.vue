<template>
<div>
  <Header></Header>
  <Multipic></Multipic>
  <!-- <ul><img src="../../static/img/Pic1.jpg" width="250px" height="250px"></ul> -->
  <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Multipic from './MultiPic.vue'
export default {
  components: {
    Header,
    Footer,
    Multipic
  }
}
</script>
<style scoped>

</style>
