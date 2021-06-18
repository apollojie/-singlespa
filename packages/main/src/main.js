import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import microApps from './single-spa-config';
Vue.use(ElementUI);
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
microApps()