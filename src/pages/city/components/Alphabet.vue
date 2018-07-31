<template>
  <ul class="list">
   <li
    class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @click="handleLetterClick"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchEnd="handleTouchEnd"
  >
     {{item}}
   </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
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
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // A元素距离顶部的高度
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      // 绑定change，向父组件c ity传值 e.target.innerText就是每个ABCDEFG中的字母
    },
    handleTouchStart () {
      this.touchStatus = true
    },
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
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    bottom 0
    top 1.58rem
    width .4rem
    .item
      line-height .44rem
      text-align center
      color $bgcolor
</style>
