<template>
    <div class="div1">
      <ul>
      <li><a href="http://www.sina.com.cn"><img class="img1" src="../../static/img/icon5.jpg"></a>
        <ul class="li1">
          <li class="c" @click="GoFour">订制</li>
          <li class="c" @click="GoThree">现货</li>
          <li class="c" @click="GoOne">返回首页</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    GoFour: function () {
      this.$router.push({path: '/4'})
    },
    GoThree: function () {
      this.$router.push({path: '/3'})
    },
    GoOne: function () {
      this.$router.push({path: '/1'})
    }
  }
}
</script>
<style lang="stylus" scoped>
 .div1{
    z-index:10;
    position:fixed;
    right:100px;
    top:50px;
  }
  li{
    list-style: none;
    float: left;
    width: 87px;
    height: 35px;
    font-size: 16px;
    line-height: 35px;
    color: white;
    text-align: center;
  }
  .li1{
    background-color:#032F54;
    visibility: hidden;
  }
  li:hover{
    background-color: ;
    cursor: pointer;
  }
  li:hover .li1{
    visibility: visible;
  }
  .c{
    background-color:#032F54;
    font-size: 13px;
    text-align: center
  }
  .c:hover{
    background-color: #8C1616;
  }
  a{
    text-decoration: none;
    color: white;
  }
  .img1{
    border-radius:50px;
    width: 50%;
    filter: blur(1px);
    float: right
  }
</style>
