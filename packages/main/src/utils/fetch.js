
import axios from 'axios'
import { Message } from 'element-ui'
import { deleteEmptyProperty } from '@/utils/tools'
const qs = require('qs')

const baseURLMap = {
  origin: process.env.VUE_APP_API,
  oss: process.env.VUE_APP_OSS_BASEURL
}

// const baseURL = '/'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 0, // 请求超时时间
  withCredentials: true
})

// 添加一个请求拦截器
service.interceptors.request.use(config => {
  // baseURL部分
  config.baseURL = !config.baseUrlType ? baseURLMap.origin : baseURLMap[config.baseUrlType]
  delete config.baseUrlType
  // 添加参数是表单类型的格式
  if (config.contentType === 'form') {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.data = qs.stringify(config.data)
  }
  if (config.method === 'get') {
    config.params && deleteEmptyProperty(config.params)
  }
  return config
}, error => {
  console.log('err: ' + error) // for debug
  Promise.reject(error)
})

// 添加一个响应拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const _isOss = baseURLMap.oss.includes(error.response.config.baseURL)
    if (_isOss && error.response.status === 401) {
      window.location = process.env.VUE_APP_REDIRECT + '?redirect=' + location.href
      // router.push('/login')
      Message({
        message: '登录已过期，请重新登录！',
        type: 'error',
        duration: 2 * 1000
      })
    } else {
      Message({
        type: 'error',
        message: error.message,
        duration: 2 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
