<template>
  <el-menu
    :default-active="activeIndex"
    unique-opened
    router
    background-color="#224573"
    text-color="#D0DEF0"
    active-text-color="#fff"
    class="nav-menu"
    style="border-right: 0px;"
    >
    <template v-for="(route,index) in menus">
      <el-submenu v-if="route.childrens !== undefined" :key="index" :index="route.path">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{route.name}}</span>
        </template>
        <el-menu-item v-for="(chilRoute, childIndex) in route.childrens" :key="childIndex" :index="chilRoute.path">{{chilRoute.name}}</el-menu-item>
      </el-submenu>
      <el-menu-item v-else :key="index" :index="route.path">{{route.name}}</el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import menus from './menus'
export default {
  data () {
    return {
      menus,
      activeIndex: null,
      activeOpeneds: null,
      router: []
      
    }
  },
}
</script>
<style>
.nav-menu{
  height: 100%;
}
</style>
<style lang="scss">
</style>
