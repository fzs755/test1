<template>
  <div>
    <ul class="fex" v-for= "item in items" :key="item.index">
       <span class="fax"> {{item.productName}} </span>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [],
      message: 'tony'
    }
  },
  mounted: function () {
    this.getData()
  },
  methods: {
    getData () {
      let _this = this
      this.$http.get('../../static/data/TestData.json').then(response => {
        _this.items = response.data.result
      }).catch(response => {
        console.log('fail')
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
 @import '../style/MultiPic'
</style>
