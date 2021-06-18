// import './public-path';
import Vue from 'vue'
import App from './App.vue'
import RouterView from './RouterView.vue'
import router from './router'
import store from './store'

import singleSpaVue from 'single-spa-vue'
Vue.config.productionTip = false


let vueOptions = {
  el: '#mainIframe',
  router,
  store,
  render: h => h(App)
}
if (!window.singleSpaNavigate) {
  delete vueOptions.el
  new Vue(vueOptions).$mount('#app')
}

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: vueOptions
})
export const bootstrap = function(...arg) {
  if (arg[0] && arg[0].GLOBALMIXIN) {
    Vue.mixin(arg[0].GLOBALMIXIN)
  }
  if (arg[0] && arg[0].PLUGIN) {
    arg[0].PLUGIN.forEach(useArg => Vue.use(...useArg))
  }
  if (arg[0] && arg[0].DIRECTIVE) {
    arg[0].DIRECTIVE.forEach(directiveArg => Vue.directive(...directiveArg))
  }
  if (arg[0] && arg[0].FILTER) {
    arg[0].FILTER.forEach(filterArg => Vue.filter(...filterArg))
  }
  if (arg[0] && arg[0].components) {
    arg[0].components.forEach(comp => Vue.component('share',comp))
  }
  return vueLifecycles.bootstrap(...arg)
} // 启动时
export const mount = vueLifecycles.mount // 挂载时
export const unmount = vueLifecycles.unmount // 卸载时
export default vueLifecycles