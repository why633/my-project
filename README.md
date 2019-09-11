# 项目搭建

``` bash
  #安装脚手架
  npm install -g create-react-app

  #自动创建名为 my-app 的项目
  create-react-app my-app

  #进入项目目录
  cd my-app

  #启动项目
  npm start
```
# 项目配置
## 安装依赖 (npm/cnpm install XXX --save)
  * antd-mobile （移动端UI样式库）
  * react-router-dom/react-router-config   （router相关）
    - react-router-config 配置插件
  * react-redux/redux/redux-thunk （redux相关）
    - redux-thunk redux异步中间件
  * @babel/plugin-proposal-decorators/babel-plugin-import （babel转换相关）
  * react-app-rewired/customize-cra （config-overrides覆盖配置插件）
  
## 覆写默认配置
  * 新建 config-overrides.js 配置
  * 修改 packge.json -> scripts
<pre>
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
}</pre>

## redux配置
  - redux
    - app.redux.js
    - reducer.js

## 路由配置
  - router
    - index.js
  
