

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
    beforePhoneLogin: {} // 短信登录验证
  },
  mutations: {},
  actions: {}
}

export default Login
