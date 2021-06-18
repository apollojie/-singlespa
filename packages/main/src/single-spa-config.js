import * as singleSpa from 'single-spa' // 导入single-spa
import axios from 'axios'
import global from '@/global'

/*
* runScript：一个promise同步方法。可以代替创建一个script标签，然后加载服务
* */
const runScript = async (url) => {
  return new Promise((resolve, reject) => {
    if (url.indexOf('.css') !== -1) {
      var link = document.createElement('link')
      link.type = 'text/css'
      link.rel = 'stylesheet'
      // link.onload = (e) => {
      //   console.log('e', e)
      //   resolve()
      // }
      link.onerror = reject
      link.href = url
      document.getElementsByTagName('head')[0].appendChild(link)
      resolve()
      // axios.get(url).then((response) => {
      //   console.log('response', response)
      // }).catch(reject)
    } else {
      const script = document.createElement('script')
      script.src = url
      script.onload = resolve
      script.onerror = reject
      const firstScript = document.getElementsByTagName('script')[0]
      firstScript.parentNode.insertBefore(script, firstScript)
    }
  })
}
// /*
// * getManifest：远程加载manifest.json 文件，解析需要加载的js
// * */
const getManifest = (url, bundle) => new Promise(async (resolve) => {
  const { data } = await axios.get(url)
  const { entrypoints, publicPath } = data
  // const assets = entrypoints[bundle].assets
  const assets = entrypoints.app.assets
  for (let i = 0; i < assets.length; i++) {
    await runScript(publicPath + assets[i]).then(() => {
      if (i === assets.length - 1) {
        resolve()
      }
    }).catch(error => console.error(publicPath + assets[i] + ' 静态资源加载失败', error))
  }
})
function registerApplication (config) {
  singleSpa.registerApplication( // system 模块 注册微前端服务
    config.name,
    async () => {
      console.log(window[config.name],'触发--location', window)
      let lib = window[config.name]
      if (lib) { // 加载过的资源不再加载
        return lib
      } else if (process.env.NODE_ENV === 'production') { // 生产环境
        lib = await getManifest(`/${config.name}/manifest.json`).then(_ => {
          return window[config.name]
        })
      } else { // 开发环境
        lib = await runScript(`http://localhost.qizhidao.com:${config.port}/app.js`, 'app').then(() => {
          console.log('加载js', window[config.name])
          return window[config.name]
        })
      }
      return lib
    },
    // 配置微前端模块前缀
    location => location.hash.startsWith(`#/${config.name}`),
    global
  )
}
// 项目配置队列
let projectList = [
  {
    name: 'base-data',
    port: 8062
  }
]
for (let i = 0, len = projectList.length; i < len; i++) {
  registerApplication(projectList[i])
}
export default function () {
  singleSpa.start() // 启动
}
// const microApps = [
//   {
//     name: 'base-data', // app name registered
//     entry: '//localhost.qizhidao.com:8062',
//     container: '#mainIframe',
//     activeRule: location => location.pathname.startsWith('#/base-data')
//   },
//   {
//     name: 'copyright',
//     entry: '//localhost.qizhidao.com:8063',
//     container: '#mainIframe',
//     activeRule: location => location.pathname.startsWith('#/copyright')
//   }
// ]

// export default microApps


// registerMicroApps([
//   {
//     name: 'base-data', // app name registered
//     entry: '//localhost.qizhidao.com:8062',
//     container: '#mainIframe',
//     activeRule: '#/base-data'
//   },
//   {
//     name: 'copyright',
//     entry: { scripts: ['//localhost.qizhidao.com:8063'] },
//     container: '#mainIframe',
//     activeRule: '#/copyright',
//   },
// ],
// {
//   beforeLoad: app => {
//     console.log('before load app.name====>>>>>', app.name)
//   },
//   beforeMount: [
//     app => {
//       console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
//     },
//   ],
//   afterMount: [
//     app => {
//       console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
//     }
//   ],
//   afterUnmount: [
//     app => {
//       console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
//     },
//   ]
// }
// );
// start()