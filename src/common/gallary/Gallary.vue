<template>
  <div class="container" @click="handleGarllaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGarllaryClick () {
      this.$emit('close') // 点击画廊关闭，传值给父组件
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    flex-direction column
    justify-content center
    align-items center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      display flex
      justify-content center
      align-items center
      overflow hidden
      width 100%
      height 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
</style>
