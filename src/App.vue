<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

body {
  // 苹果设备上有用的
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-family: $font-hei;
  //默认行高
  line-height: 1.5;
  //默认字体大小
  font-size: 16px;
  background: #f5f5f5;
}

#app {
  // 500px 是经验
  max-width: 500px;
  margin: 0 auto;
}

</style>
