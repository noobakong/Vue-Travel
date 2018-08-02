<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="categoryList"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      lastid: ''
    }
  },
  methods: {
    getDetailInof () {
      axios.get('/api/detail.json?id=' + this.$route.params.id)
        .then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.lastid = this.$route.params.id
    this.getDetailInof()
  },
  activated () { // 页面重新被显示的时候，就会执行activated函数 使用了keep-alive也一样
  // 判断页面选择的城市和之前的城市是否为一个城市，如果不是一个城市，则重新发送ajax请求
  if (this.lastid !== this.$route.params.id) {
    this.lastid = this.$route.params.id
    this.getDetailInof()
  }
}
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
