<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [{
      id: '0001',
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg',
      title: '远去的恐龙',
      desc: '远去的恐龙远去的恐龙远去的恐龙远去的恐龙走去看看看'
    }, {
      id: '0002',
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg',
      title: '远去的恐龙',
      desc: '远去的恐龙远去的恐龙远去的恐龙远去的恐龙走去看看看~~~'
    }, {
      id: '0003',
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg',
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        position absolute
        bottom 0.1rem
        right 0.3rem
        background #ff9300
        padding 0 .2rem
        border-radius .04rem
        color #fff
        font-weight bold
</style>
