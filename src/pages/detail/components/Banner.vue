<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-num"><span class="iconfont banner-icon">&#xe626;</span>{{this.bannerImgs.length}}</div>
      </div>
    </div>
    <common-gallary
      :imgs="bannerImgs"
      v-show="showGallary"
      @close="handleBannerClick"
    >
    </common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'Banner',
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = !this.showGallary
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom: 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      color #fff
      left 0
      right 0
      bottom 0
      line-height .6rem
      background-image linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.6))
      .banner-title
        flex 1
        font-size .36rem
        padding .2rem
      .banner-num
        line-height .4rem
        padding 0 .4rem
        height .4rem
        font-size .24rem
        margin-top .3rem
        border-radius .2rem
        background rgba(0,0,0,.6)
        .banner-icon
          font-size .24rem
          padding-right .1rem
</style>
