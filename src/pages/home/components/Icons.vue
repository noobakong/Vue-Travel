<template>
  <div class="icons">
    <!-- 使用swiper来实现图标大于一屏的滚动效果 -->
    <swiper :options="swiperOption">
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
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: false
      }
    }
  },
  computed: {
    pages () { // 分页逻辑
      const pages = []
      this.list.forEach((item, index) => {
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
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 50%
.icons
  padding: .15rem 0;
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
