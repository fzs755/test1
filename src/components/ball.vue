<template>
  <div>
    <div id="ball"></div>
    <div id="board"></div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
   #ball{
      width: 30px;
      height: 30px;
      background: yellow;
      border-radius: 100%;
      position: absolute;
   }
   #board{
      width: 60px;
      height: 20px;
      background: red;
      position: absolute;
      bottom: 0;
      left: 170px;
   }
</style>
