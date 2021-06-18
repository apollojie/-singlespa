
import mixin from './mixin'
const _ = require('lodash');
export default {
  // 主应用向子应用注入Mixin
  GLOBALMIXIN: mixin,
  // 主应用向子应用注入插件（如：注入ElementUI -> [ElementUI,{size: 'mini', zIndex: 3000}]），使用二维数组实现直接将多个插件映射到子应用的Vue.ues方法上
  PLUGIN: [],
}
