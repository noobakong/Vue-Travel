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
- 父子间向子组件传递消息

### 3.7 兄弟组件联动
**Todo1. 点击右侧字母表 list也跳到对应的城市也部分**

循环字母列表时为每一个字母绑定点击事件
alphabet组件传递消息给父组件city，city在传递消息给list组件，实现Alphabet和list的兄弟传值

- **Alphabet.vue**  
`@click="handleLetterClick"`

```javascript
handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
```
- **City.vue**
`@change="handleLetterChange"`

```Javscript
handleLetterChange (letter) {
      this.letter = letter
    }
```

`:letter="letter"` 传递给list.vue组件

- **List.vue**
props 接收 letter
通过watch来监听letter的变化
```JavaScript
  watch: {
    letter () { // 监听letter改变
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // refs-->通过为每个循环绑定ref ref的值对应的是每个key 也就是每个字母
        // [0]-->取到的是一个数组，具体的元素dom节点为数组的第一项
        this.scroll.scrollToElement(element)
        // scroll插件的而一个方法帮我们调到制定元素
      }
    }
  }
```

**Todo2. 滑动右侧字母表，list跟着滑动到对应的位置**

- **Alphabet.vue**
绑定star move end 三个触摸方法
```JavaScript
  @touchstart="handleTouchStart"
  @touchmove="handleTouchMove"
  @touchEnd="handleTouchEnd"
```
把字母表从cities获取放到计算属性letters中
```JavaScript
computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
      // ['A','B','C'...]
    }
  },
```
将计算出的滑到哪个字母$emit传递给父元素
```JavaScript
handleTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop // A元素距离顶部的高度
        const touchY = e.touches[0].clientY - 79 // 手指距离header下边缘的的距离
        const index = Math.floor((touchY - startY) / 22) // 滑动了第几个字母
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
        // console.log(index)
      }
    },
```

- **City.vue**
@change="handleLetterChange"接收来自Alphabet的letter
`:letter="letter"` 传递给list
同样的和1一样使用watch来监视

**Todo3. 列表组件优化**
1. `const startY = this.$refs['A'][0].offsetTop`
startY的值是固定的，可以提取出来

放在updated生命周期函数钩子中，因为刚开始加载citise是通过json获取的，刚开始获取不到的时候是空，之后有获取到了ajax的内容，页面更新，就会执行updated钩子函数

2. 函数节流
手指在屏幕上滑动的时候，函数执行的次数是非常高的，我们可以采用函数节流
通过定义一个定时器，来大大提高我们代码性能
```JavaScript
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 // 手指距离header下边缘的的距离
          const index = Math.floor((touchY - this.startY) / 22) // 滑动了第几个字母
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
          // console.log(index)
        }, 10)
      }
    }
```

### 3.7 完善搜索框--逻辑

- 在search.vue增加search-content类 用于展示搜索内容
```JavaScript
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
```
> ref = search 用于在mounted挂载滚动插件 v-show="keyword" 没有输入内容不显示

- 在watch中监听keyword的变化，使用循环遍历，通过筛选把符合的city追加到list数组

- 使用v-for循环输出list

- 中间使用了定时器来实现函数节流来提高性能

## 4.使用Vuex来实现数据共享
### 4.1 实现city和home组件的数据联动
> 我们想要城市页面和首页实现数据共享
City.vue和Home.vue是没有一个父组件可供中转，那么想进行两者的通信，该怎么办呢？

**Vuex**
- npm install vuex --save
- 在src目录下创建store文件夹并新建index.js文件
```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ // 向外暴露一个由Actions State Mutations 三个组成的系统对象
  state: {
    city: 'aaa'
  },
  // actions: {
  //   changeCity (ctx, city) { // 借助这个ctx上下文来使用commit方法来调用Mutations完成数据的更改
  //     console.log(city)
  //     console.log(ctx)
  //     ctx.commit('MchangeCity', city)
  //   }
  // },
  mutations: {
    MchangeCity (state, city) {
      state.city = city
    }
  }
})

```
- 在main.js中引入
`import store from './store' // vuex` 这样我们全局都能访问到store了
并在vue实例中申明store,这样，我们以后就能使用vuex的数据了
{{this.$store.state.city}}

**具体使用**
1. 把要公用的数据（例如city）定义到store/index.js的state中，在页面中把有city的地方换成 `{{this.$store.state.city}}`
2. 我们为循环的每一个城市按钮绑定一个方法 `@click="handleCityClick(item.name)`
并在methods中定义方法:
```JavaScript
  methods: {
    handleCityClick (city) {
      this.$store.commit('MchangeCity', city) // 想要通过actions调用方法必须使用dispatch 或者 跳过actions直接通过commit来调用Mutations
      this.$router.push('/') // 选择后跳转到主页 实现联动 用了vue-router的编程跳转链接
    }
  }
```
3. 在store中定义Actions函数和Mutations函数 来实现数据的修改

**总结:**
> 想要通过vuex来管理公用数据,想要更改数据 要经过一下步骤
1. 组件 ---dispatch---> Actions
```JavaScript
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city) // 想要通过actions调用方法必须使用dispatch
  }
```
2. Actions ---commit---> Mutations
```JavaScript
actions: {
    changeCity (ctx, city) { // 借助这个ctx上下文来使用commit方法来调用Mutations完成数据的更改
      ctx.commit('MchangeCity', city)
    }
  },
```
3. Mutations ------> State 
```JavaScript
  mutations: {
    MchangeCity (state, city) {
      state.city = city
    }
  }
```

> 在不复杂的环境下，有的时候我们更爱数据并不一定需要经过Actions，组件可以直接通过commit来使Mutations改变State

1. 组件 ---commit---> Mutations
```JavaScript
  methods: {
    handleCityClick (city) {
      this.$store.commit('MchangeCity', city) // 想要通过actions调用方法必须使用dispatch
  }
```
2. Mutations ------> State 
```JavaScript
  mutations: {
    MchangeCity (state, city) {
      state.city = city
    }
  }
```

### 4.2 vuex的高级使用和localStorage
> 上述我们已经完成了vuex 实现两个不先练的组件的数据共享，但是我们一旦刷新我们的页面，我们的页面数据还是默认的我们在store中定义的数据，如何让程序记录我们的操作

**使用localStorage来完成**
在Mutations定义的方法里 加入：
` localStorage.city = city` 来记录我们选择的城市
在state中
`city: localStorage.city || '南阳'` 
这样 浏览器就能记忆我们选择的城市了 

> 但是此时存在一个问题，浏览器如果使用了隐身模式或者关闭了浏览器存储，我们的程序就会直接报错无法执行
我们可以使用try catch来优化一下我们的代码

-------------
**vuex高级**
1. 慢慢的 我们的store- index中的代码越来越多，我们可以把状态分开到不同的文件中管理

2. 使用map辅助函数来进行优化

### 4.3 使用keep-alive优化网页性能
> 路由发生切换的时候 ajax都会被重新发送，为什么？

因为我们的页面每一次渲染都会执行mounted钩子 而我们的ajax请求就是放在mounted中进行的

> 怎么优化？

将我们的router-view坑用keep-alive标签包裹起来
```Html
<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
```
页面被keep-alive包裹起来，就会是页面的资源加载到内存当中，不需要重新渲染，也不需要从新执行钩子，来回返回页面也只会获取一次json 
此时，我们的vue中多出来一个生命周期函数钩子：`activated`

### 4.4 选择城市后返回页面 页面需要被修改
> 我们之前写的代码是固定的，虽然选择的城市发生变化,但是我们的我们的home页面中的内容并没有变化，怎么办？

我们home首页的内容是有index.json ajax来获取的 我们只需要在home组件获得ajax的时候 使用？传参的方式，使得每一个城市对应自己的json文件，就可以了
 `axios.get('/api/index.json?city=' + this.city`

> 但是此时的json文件被缓存到了内存当中，存的还是第一次的值，我们怎么改变缓存的数据呢

由于此时的页面被keep-alive标签包裹，我们的ajax请求只会在第一次刷新的时候被获取，但是此时我们需要由城市列表选择的城市来同步我们首页的json文件以达到统一刷新的目的

**此时我们可以使用activated生命周期钩子**
因为在被包裹keep-alive标签之后，mounted钩子不会执行，但是activated钩子只要页面重新出现，就会执行，所以我们可以在activated钩子函数中 判断页面选择的城市和之前的城市是否为一个城市，如果不是一个城市，则重新发送ajax请求
我们在data数据中新增一个 `lastcity` 数据 配合`activated`钩子使用
```JavaScript
activated () {
  if (this.lastcity !== this.city) {
    this.lastcity = this.city
    this.getHomeInfo()
  }
}
```

##　5.详情页面的制作
创建detail.vue Banner.vue 导入detail路由
### 5.1 banner的制作

- 字体图标更新后 记得替换字体文件和iconfont.css的一段 base64的代码、

- 使用 `background-image linear-gradient` 达到渐变效果

### 5.2 banner画廊组件

> 这个画廊组件不仅仅这个组件中要使用，以后可能在别的地方也会使用

所以我们新建 src/common/gallary/Gallary.vue 编写画廊组件为以后复用

- 使用swiper插件实现图片轮播滚动

- 当我们点击banner的时候调到画廊页面，会发现渲染有问题，怎么办？
点击跳转dom节点，会使得我们的css属性计算出错，从而造成错误，swiper为我们提供了一组配置，我们在配置项里添加 `observeParents: true` 和 `observer: true` 
observeParents: 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
observer: 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。

### 5.3 渐隐逐显的header

- 页面有两个头部，一个是刚进去的的定位为abs的返回按钮，另外一个是定位是fixed头部导航
- 刚开始我们使用v-show = showAbs 和 v-show = ！showAbs 来分别控制两个头部，使其只显示一个

- 使用 `window.addEventListener('scroll', this.handleScroll)` 来监听滚动的距离以切换哪个头部的展示 这个方法放在`activated`钩子里

- handleScroll方法使用 document.documentElement.scrollTop 监听滚动离顶部的距离

> 展示效果做好，剩下渐隐渐显的效果

在 fixed 的头部标签绑定样式对象 ` :style="opacityStyle"` 
```JavaScript
handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) { // 过渡阶段
        let opacity = top / 140 // 过渡效果
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
```