<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <Icon name="tupian" className="banner-icon"/>{{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <CommonGallary @close="handleGallaryClose" v-show="showGallay" :imgs="gallaryImgs"/>
    </fade-animation>
  </div>
</template>

<script>
import { Icon, CommonGallary, FadeAnimation } from 'base'
export default {
  name: 'Banner',
  props: {
    gallaryImgs: Array,
    sightName: String,
    bannerImg: String
  },
  components: {
    Icon,
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      showGallay: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallay = true
    },
    handleGallaryClose () {
      this.showGallay = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .14rem
        font-size .24rem
        padding 0 .4rem
        line-height .32rem
        height .32rem
        border-radius .2rem
        background-color rgba(0, 0, 0, .8)
      .banner-icon
        font-size .24rem
        color #fff
</style>
