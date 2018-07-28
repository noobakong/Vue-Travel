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

## 2. 首页header的开发
### 2.1 项目中使用stylus来编写css样式
`npm install stylus --save`  `npm install stylus-loader --save`
- 要学习stylus语法
- 学习flex布局 rem布局的用法
### 2.2 iconfont的使用和代码的优化
- 如何使用iconfont
> 1. 进入iconfont官网，选择图标，加入购物车放入项目中
> 2. 下载zip包并解压，把字体文件放入src/assets/styles/iconfont文件夹中
>   把iconfont.css放在src/assets/styles中，把css中的文件路径改一下（因为此时>css和字体文件不在同一目录下了，默认的css和字体文件在一个文件夹内）
> 3. 在main.js中引入字体文件 `import './assets/styles/iconfont.css'`
> 4. 上述完成后，在想要使用图标的标签上加入 `iconfont` 类名，就可以在页面中使用 >图标了，可以用每一个图标类名来引用，也可以使用编码的形式来使用，每一个图标的编码
>都在 iconfont官网我的项目图标里面，点击复制图标就能得到图标编码；

- 优化代码
> 有些代码的样式是多变的，我们可以将可变的css放入assets styles文件夹的varibles.styl文件中，方便以后的更爱--》改一处全部就改的效果

例如：
我们的背景色就是一个可改变的css参数，我们可以在varibles.styl中定义 `$bgcolor = #00bcd4` 背景色
而后在样式里引入这个styl文件即可
` @import '../../../assets/styles/varibles.styl';`
`background-color $bgcolor`

但是@import文件引入的前缀非常长，在可以使用@符号可以优化此问题 
因为我们在webpack配置js文件中制定`'@': resolve('src'),` 制定了@就是src目录
但是我们在css中引入css文件是 需要使用src的时候 要在@前面再多加一个~符号

相同的 我们的sytles文件夹多次使用 我们可以在webapck.config.js文件中定义
`'styles': resolve('src/assets/styles'),`
这样我们使用styles目录的时候就可以简化了