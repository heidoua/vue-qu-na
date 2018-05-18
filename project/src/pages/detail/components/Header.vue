<template>
    <div>
        <router-link v-show="showABS" tag="div" class="header-asb" to="/">
          <Icon name="return" className="header-abs-back"/>
        </router-link>
        <div class="header-fixed" :style="opacityStyle" v-show="!showABS">
          <Icon name="return" className="header-fixed-back"/>
          商品详情
        </div>
    </div>
</template>

<script>
import { Icon } from 'base'
export default {
  name: 'Header',
  components: {
    Icon
  },
  data () {
    return {
      showABS: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showABS = false
      } else {
        this.showABS = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header-asb
    position absolute
    top .2rem
    left .2rem
    width 0.8rem
    height 0.8rem
    line-height .8rem
    border-radius 50%
    text-align center
    background-color rgba(0, 0, 0, .8)
    .header-abs-back
      color #ffffff
      font-size .4rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    color #ffffff
    background-color $bgColor
    font-size .32rem
    .header-fixed-back
      position absolute
      top 0
      left 0
      width 0.64rem
</style>
