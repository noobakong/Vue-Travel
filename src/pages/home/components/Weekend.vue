<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of WeekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  data () {
    return {
      WeekendList: [{
      id: '0001',
      imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
      title: '远去的恐龙',
      desc: '远去的恐龙远去的恐龙远去的恐龙远去的恐龙走去看看看'
    }, {
      id: '0002',
      imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
      title: '远去的恐龙',
      desc: '远去的恐龙远去的恐龙远去的恐龙远去的恐龙走去看看看~~~'
    }, {
      id: '0003',
      imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
      title: '远去的恐龙',
      desc: '远去的恐龙远去的恐龙远去的恐龙远去的恐龙走去看看看~~~'
    }]
  }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .title
    padding-left .2rem
    line-height .8rem
    background #eee
    text-index .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
  .item-img
    width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
