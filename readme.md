# monorepo + singleSpa实现同一框架组件跨项目共享

## 项目目录
  - monorepo
    - packages
      - base-data
        - package.json 配置workspaces以及本地依赖引用
      - components 
        - package.json 本地共享依赖包
      - main  --基座
    
## 为什么要使用monorepo？
 - 优势  
 本地依赖包（本demo中是components）的更改可以在引用它的项目中实时更新。适用于本地依赖包频繁改动的项目。如果依赖包基本没有改动，建议使用 npm 包的形式。

 - 为什么不用singlespa中推荐的方式？  
 正在看文档阶段

 - 关于组件共享的方案有哪些？  
    - npm包
    - parcel （跨项目跨框架的情况下推荐使用）
    - systemjs import-map（对于如何实现依然模糊）
    - monorepo
    - git submodule


## 如何启动项目？
 - lerna bootstrap  
 monorepo顶层目录下，执行 lerna bootstrap。这一步的目的是将packages/*中的所有项目的共同依赖以及本地依赖（packages/components）添加至顶层node_modules包中，以便在其它项目中引用。执行完lerna bootstrap命令后，在顶层node_modules包中可以查看到@monorepo这个依赖包。

 - lerna run serve  
 可以将packages/*下的所有子项目运行，因本人对lerna的了解有限，使用该命令后发现无法得知项目运行进度和

 - cnpm run serve  
 如果想实时查看项目的运行进度和运行地址，可以通过cd packages/base-data进入项目，执行cnpm run serve执行对应的子项目


## 尝试
demo是一种尝试，本意是想换种方式来解决singlespa组件跨项目共享的问题