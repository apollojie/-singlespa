<template>
  <div id="app" class="App">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  created(){
    console.log('this.router')
    // this.$router.push('/base-data/index')
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Microsoft Yahei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
