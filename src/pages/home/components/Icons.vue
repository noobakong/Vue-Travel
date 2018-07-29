<template>
  <div class="icons">
    <!-- 使用swiper来实现图标大于一屏的滚动效果 -->
    <swiper>
      <!-- 控制图标页数 -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <!-- 按页循环图标 -->
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-image">
            <img class="icon-imgcontent" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
      id: '0001',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      desc: '景点门票景点门票景点门票景点门票景点门票景点门票'
    }, {
      id: '0002',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      desc: '一日游'
    }, {
      id: '0003',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
      desc: '上海必游'
    }, {
      id: '0004',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
      desc: '动植物园'
    }, {
      id: '0005',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
      desc: '夏日玩水'
    }, {
      id: '0006',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
      desc: '汽车票'
    }, {
      id: '0007',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      desc: '一日游'
    }, {
      id: '0008',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
      desc: '上海必游'
    }, {
      id: '0010',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
      desc: '动植物园'
    }, {
      id: '0011',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
      desc: '夏日玩水'
    }, {
      id: '0012',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
      desc: '汽车票'
    }]
  }
    },
  computed: {
    pages () { // 分页逻辑
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  padding-top .15rem
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 50%
.icon
  position: relative
  overflow: hidden
  float: left
  width: 25%
  height: 0
  padding-bottom: 25%
  .icon-image
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0.44rem
    box-sizing: border-box
    padding: 0.05rem
    .icon-imgcontent
      display: block
      margin: 0 auto
      height: 100%
  .icon-desc
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: 0.44rem
    text-align: center
    font-weight: 700
    color: $darktextcolor
    ellipsis() //引入的mixins.styl里定义的一个样式方法，可以实现多文字省略的效果
</style>
