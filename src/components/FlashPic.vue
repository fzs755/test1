<template>
<div>
  <li v-for ='item in items' v-bind:key=index>
    {{item}}
  </li>
</div>
</template>
<script>
export default {
    data:{},
    mounted: function(){
        this.cartview()
    },
    methods:{ 
        cartview: function(){
          let _this=this;
          this.http

        }
    }
}
</script>

<style scoped>
</style>