
import store from '@/store'
export default {
  methods: {
    GETUSERINFO: () => {
      return store.state.Login.userInfo
    }
  }
}
