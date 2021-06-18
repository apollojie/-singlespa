<template>
  <div class="warp">
    <div id="mainIframe"></div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 100%;
  overflow: hidden;
  #mainIframe {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>
