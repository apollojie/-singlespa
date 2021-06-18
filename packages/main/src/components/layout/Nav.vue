<template>
  <div class="nav">
    <span class="link">{{item.name}}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [],
      currentPath: null
    }
  },
  methods: {
    goPath (item) {
      const path = this.$route.path
      if (path !== item.path) {
        this.$router.push({ path: item.path })
      }
    },
    deleteItem (index) {
      this.list.splice(index, 1)
    },
    addPath () {
      const { name, path } = this.this.$route
      this.list.push({
        name,
        path
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  justify-items: center;
  align-items: center;
  .link {
    display: flex;
    width: 120px;
    height: 32px;
    border-right: 1px solid #eee;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .icon {
      float: right;
      margin-right: 5px;
    }
  }
  .active {
    background: #1E3562;
    color: #fff;
    border-radius: 20px;
  }
}
</style>
