<template>
  <div class="ips-container">
    <aside class="ips-container__aside">
      <Menu></Menu>
    </aside>
    <main class="ips-container__content" >
      <router-view />
    </main>
  </div>
</template>
<script>
import Menu from './Menu'
import { mapActions, mapState } from 'vuex'
import { Message } from 'element-ui'

export default {
  components: {
    Menu
  },
  data () {
    return {
      pageLoaded: true,
      companyVisible: false,
      dialogTableVisible: false,
      num: 0,
      timer: null,
      isLoop: true
    }
  },
  computed: {
    ...mapState({
      collapseStatus: state => state.Login.collapseStatus
    })
  },
}
</script>
<style lang="scss" scoped>

.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-50px);
}
.ips-container {
  display: flex;
  &__aside{
    width: 200px;
    height: 100vh;
    background: #ccc;
  }
}
.ips-container__content{
  height: 100vh;
}
.container {
  &__nav {
    .company {
      position: relative;
      font-size: 16px;
      line-height: 52px;
      margin: 0;
      padding-left: 50px;
      background: #28538f;
      color: #fff;
      cursor: pointer;
      .icon {
        position: absolute;
        right: 20px;
        top: 18px;
        margin-left: 10px;
      }
    }
    ul {
      color: red;
    }
    .companyList {
      list-style-type: none;
      margin: 0;
    }
  }
}

.aside-scrollbar {
  width: 190px;
  height: 100%;
  transition: width .2s linear;
  &--collapse {
    width: 56px;
    .nav-info__logo img {
      width: 56px;
    }
  }

  &__wrap {
    overflow-x: hidden !important;
  }
}

.nav-info {
  position: relative;

  &__logo {
    text-align: center;
    img {
      width: 100px;
      height: 30px;
    }
  }

  &__user {
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    .msg {
      
    }
  }

  &__action {
    .nav-info__action__btn {
      outline: none;
    }
  }
}
.nav-collapse {
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
}
</style>