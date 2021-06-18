<template>
  <el-header class="menu-header">
    <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in levelList" :key="item.path">
          <span class="no-redirect">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </el-header>
</template>
<script>
export default {
  data () {
    return {
      levelList: []
    }
  },
  mounted () {
   
  },
  methods: {
  
  },
}
</script>
<style lang="scss" scoped>
  .menu-header{
    height: 2em !important;
    min-width: 880px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3b5d98;
    border-bottom: 1px solid #c36d13;
  }
  .no-redirect{
    font-size: 0.8em;
    color: #c7c7c7;
    font-weight: 400;
  }
  /*breadcrumb transition*/
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all .5s;
  }

  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .breadcrumb-move {
    transition: all .5s;
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
</style>
