
const userInfo = localStorage.getItem('userInfo')
const Login = {
  state: {
    login: false,
    currentPath: '/',
    userInfo: userInfo ? JSON.parse(userInfo) : null,
    vCodeStatus: false,
    collapseStatus: false,
    menuWidth: '190px',
    accountCount: 0,
    beforePhoneLogin: {}, // 短信登录验证
    temRoutePath: '' // 当前菜单路由
  },
  mutations: {
    // 设置短信登录验证前文本输入保存信息
    SET_PHONE_LOGIN (state, payload) {
      state.beforePhoneLogin = payload
    },
    SET_LOGIN (state, bool) {
      state.login = bool
    },
    SET_CURRENT_PATH (state, path) {
      state.currentPath = path
    },
    SET_USER_INFO (state, obj) {
      state.userInfo = obj
    },
    SET_CODE_STATUS (state, bool) {
      state.vCodeStatus = bool
    },
    SET_COLLAPSE_STATUS (state) {
      state.collapseStatus = !state.collapseStatus
    },
    SET_MENU_WIDTH (state) {
      state.menuWidth = state.collapseStatus ? '56px' : '190px'
    },
    SET_ERROR_COUNT (state, count) {
      switch (count) {
      case 1:
        state.accountCount++
        break
      default:
        state.accountCount = count
      }
    },
    SET_TEMROUTE_PATH (state, val) {
      state.temRoutePath = val
    }
  },
  actions: {}
}

export default Login
