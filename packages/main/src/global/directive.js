import store from '@/store'
export const permission = {
  inserted: function (el, bind) {
    let permission = bind.value
    if (!permission) return
    const userInfo = store.state.Login.login ? store.state.Login.userInfo : JSON.parse(window.localStorage.getItem('userInfo'))
    let permissionArr = userInfo.permissions
    if (permission instanceof Array) {
      permission.every(item => permissionArr.indexOf(item) < 0) && el.parentNode.removeChild(el)
    } else if (permissionArr.indexOf(permission) === -1) {
      el.parentNode.removeChild(el)
    }
  }
}
