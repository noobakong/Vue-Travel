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

## 2. 首页的开发

### 2.1 准备工作&注意事项

####  (1).项目中使用stylus来编写css样式

`npm install stylus --save`  `npm install stylus-loader --save`
- 要学习stylus语法
- 学习flex布局 rem布局的用法
#### (2). iconfont的使用和代码的优化

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
#### (3). 在github上创建新分支
> 在企业级的开发里，每一个新功能或新模块的开发都是在一个新的分支上进行
> 开发完成后再合并到master主分支上

    在github上创建仓库：
    Create a new repository on the command line
    
    touch README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add <name> <url> 
    git push -u origin master
    
    在本地新建一个分支： git branch Branch1
    切换到你的新分支: git checkout Branch1
    将新分支发布在github上： git push origin Branch1
    在本地删除一个分支： git branch -d Branch1
    在github远程端删除一个分支： git push origin :Branch1   (分支名前的冒号代表删除)

#### (4).管理分支的一些语法

1. 查看分支
- 查看本地分支
```
$ git branch
* master
```
- 查看远程分支
`git branch -r`
- 查看所有分支
`git branch -a`

2. 本地创建新的分支
`git branch [branch name]`

3. 切换到新的分支
`git checkout [branch name]`

4. 创建+切换分支
`git checkout -b [branch name]`
git checkout -b [branch name] 的效果相当于以下两步操作:
`git branch [branch name] + git checkout [branch name]`

5. 将新分支推送到github
`git push origin [branch name]` orgin是你远程仓库的名字

6. 删除本地分支
`git branch -d [branch name]`

7. 删除github远程分支
`git push origin :[branch name]`  分支名前的冒号代表删除。 

8. 合并分支
```git
git checkout master
git merge <name>/<new-branch-name>
git push
```



### 2.2 首页轮播

首页轮播图，采用vue-awesome-swiper插件
> [vue-awesome-swiper github](https://github.com/surmon-china/vue-awesome-swiper)

npm装包
> `npm install vue-awesome-swiper@2.6.7 --save`

使用方法和使用步骤参考官网

在swiper-slide标签里填入img属性并引入src 加入类swiper-img 在style里定义width的宽度为100% 即可适应轮播

> 此时的页面在网速不好的情况下会发生页面抖动 如何解决
在轮播元素的最外层加一个class为wrapper的div 然后定义.wrapper的样式
```stylus
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom: 26.67%
    background #eee
    .swiper-img
      width 100%
```
这样就能把轮播图的位置保持撑起，就不会发生页面抖动了

>此时，又有一个问题，我们需要导航点，怎么实现
```
swiperOption: {
        pagination: '.swiper-pagination'
      }
```
在swiperOption里添加pagination配置项就可以了

> 此时的导航激活状态是蓝色的 怎么更改为白色？
我们可以在页面查看小原点的类名为`swiper-pagination-bullet-active`，我们如果直接在样式中修改这个样式的background，是达不到更改效果的，为什么，因为此时的样式是当前组件的样式，而这个小圆点属于swiper组件的样式
**这时，我们可以使用穿透样式来实现**
在样式的最前面编写如下代码
```
.wrapper >>> .swiper-pagination-bullet-active
    background: #eee
```
这样，就能达到从一个组件穿刺到另一个组件的样式更改

> 最后 使用v-for 对图标进行列表渲染循环，把数据保存到data的swiperList对象中 

### 2.3 图标区域页面布局

**初始化**
- git创建分支
- 新建icons.vue
- Home.vue中引入组件

**图标区域逻辑实现**
> 当页面图标大于八个 可以左右拖动

1. 在图标元素外加入swiper-slide标签和swiper标签

### 2.4 首页推荐组件开发

### 2.5 周末游组件开发


## 3 使用ajax传递数据
### 3.1 准备工作
> vue官方推荐使用axios来完成ajax数据的请求

- 装包: `npm install axios --save`
- home组件中引入axios
- 结合vue的mouted生命周期钩子来完成请求

如果每个子组件都发送一个ajax请求来获取数据的话，一个首页就要请求多个ajax请求，会使我们的程序效率下降，我们可以在home组件请求一个ajax请求，把数据传给子组件，这样就能提高效率

> 怎么模拟后台的数据呢？

**因为我们页面整直接访问static文件夹**,所以我们可以在static下创建一个mock文件夹，里面定影json文件来模拟后台数据

但是我们并不想提交我们的数据到github，所以我们可以在gitnore文件中排除文件

我们上线后的ajax请求地址都是基本都是相对路径'/api/下的json文件，但是此时我们的文件在static/mock文件夹中，我们可以把axios的请求地址改成我们本地的static/mock，但是这样做的话以后上线前要更改代码，这是不可取的
> 即使用api文件目录，又能获取到static中的文件，怎么办？

我们可以使用vue基于webpack-dev-serve的一个配置选项来解决这个问题，在vuecli生成的config文件夹中index.js文件有一个`proxyTable`配置选项
我们可以这样来替换我们的请求地址：
```JavaScript
proxyTable: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    }
```
这样，就能完美解决我们的问题了

> 注意，json格式的每一项的最后一项不要加带分号，这样可能会导致json数据解析失败

### 3.2 首页父子组件数据传递
由于home组件获取json数据后，应该向子组件传递数据，这就涉及到父组件向子组件传值的问题
父组件通过属性向子组件传值，子组件props接受数据
```JavaScript
methods: {
  getHomeInfo () {
    axios.get('/api/index.json') // 返回的是一个promise对象，后面使用then
      .then(this.getHomeInfoSucc) // 获取成功执行getHomeInfoSucc函数
  },
  getHomeInfoSucc (res) {
    res = res.data
    if (res.ret && res.data) {
      const data = res.data
      this.city = data.city
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.weekendList = data.weekendList
    }
    console.log(res)
  }
},
mounted () {
  this.getHomeInfo() // 页面挂载好执行这个方法ajax获取数据
}
```

## 3. 首页的开发
### 3.1 初始化准备
- 配置路由
- 创建组件

### 3.2 header开发
- 创建组件
- city.vue导入

### 3.3 搜索框
- 创建组件
- city.vue导入

### 3.4 城市列表
- 创建组件
- city.vue导入

> title聊表的边框不太明显，可以给其添加样式
```css
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
```
> 因为我们将要使用一个滚动插件--Better-scroll来完成此页面，所以我们应该禁止页面的超出滚动
```css
.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
```

使用**Better-scroll**
- 装包 npm install better-scroll --save
- import Bscroll from 'better-scroll'
- 在vue的mounted时挂载一个better-scroll实例

> 因为这个组件需要最外城的wrapper dom元素 我们给最外层标签添加ref="wrapper"属性

### 3.5 字母滑动选择器
- 创建组件
- city.vue导入

使用flex布局使其居中

### 3.6 ajax获取城市数据
- 在city.vue中引入city.json