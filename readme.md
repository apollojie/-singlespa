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

 - 关于组件共享的方案有哪些？  
    - npm包
    - parcel （跨项目跨框架的情况下推荐使用）
    - global自定义参数  
      将公共组件提升至项目顶层，在registerApplication注册项目时，将组件以{components:[vm1,vm2]}的形式传递给需要共享的项目，并在子项目的bootstrap生命周期中获取该共享组件并实现全局注册。这种方式好与坏暂时没有明确。
    - monorepo
    - git submodule


## 如何启动项目？
 - lerna bootstrap  
 monorepo顶层目录下，执行 lerna bootstrap。这一步的目的是将packages/*中的所有项目的共同依赖以及本地依赖（packages/components）添加至顶层node_modules包中，以便在其它项目中引用。执行完lerna bootstrap命令后，在顶层node_modules包中可以查看到@monorepo这个依赖包。

 - lerna run serve  
 可以将packages/*下的所有子项目运行

 - cnpm run serve  
 如果想实时查看项目的运行进度和运行地址，可以通过cd packages/base-data进入项目，执行cnpm run serve执行对应的子项目
