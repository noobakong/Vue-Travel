<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
},
data () {
  return {
    'swiperList': [],
    'iconList': [],
    'recommendList': [],
    'weekendList': [],
    'lastcity': '' // 最后的城市 用于判断是非重新发送ajax请求
  }
},
computed: {
  ...mapState(['city'])
},
methods: {
  getHomeInfo () {
    axios.get('/api/index.json?city=' + this.city) // 返回的是一个promise对象，后面使用then
      .then(this.getHomeInfoSucc) // 获取成功执行getHomeInfoSucc函数
  },
  getHomeInfoSucc (res) {
    res = res.data
    if (res.ret && res.data) {
      const data = res.data
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.weekendList = data.weekendList
    }
    console.log(res)
  }
},
mounted () {
  this.lastcity = this.city
  this.getHomeInfo() // 页面挂载好执行这个方法ajax获取数据
},
activated () { // 页面重新被显示的时候，就会执行activated函数 使用了keep-alive也一样
  // 判断页面选择的城市和之前的城市是否为一个城市，如果不是一个城市，则重新发送ajax请求
  if (this.lastcity !== this.city) {
    this.lastcity = this.city
    this.getHomeInfo()
  }
}
}
</script>

<style>

</style>
