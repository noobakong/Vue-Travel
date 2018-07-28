# vue-travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 1. 初始化项目
### 1.1 手机显示配适
`minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"` 阻止用户手滑发大缩小页面
### 1.2 初始化样式 -->引入reset.css
### 1.3 移动端多倍屏边框不准的问题 --> 引入 border.css
### 1.4 解决click延迟300ms的问题 --> 引入 fastclick 库
- `npm install fastclick --save`
- 在main.js中引入fastclick `import fastClick from 'fastclick'`
- `fastClick.attach(document.body)`
### 1.5 注册阿里的iconfont并创建travel项目