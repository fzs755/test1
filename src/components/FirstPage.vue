<template>
<div>
  <Header></Header>
  <Multipic></Multipic>
  <el-form-item >
    <el-input name="name" disabled type="text" autoComplete="on"
    placeholder="用户名"/>
  </el-form-item>
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
