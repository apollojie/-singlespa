# monorepo + singleSpa实现同一框架组件跨项目共享

## 项目目录
  - monorepo
    - packages
      - base-data
        - package.json 配置workspaces以及本地依赖引用
      - components 
        - package.json 本地共享依赖包
      - main

## 如何启动项目？
 - monorepo顶层目录下，执行 lerna bootstrap。这一步的目的是将packages/*中的所有项目的共同依赖以及本地依赖（packages/components）添加至顶层node_modules包中，以便在其它项目中引用。
