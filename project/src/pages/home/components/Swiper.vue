<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
        <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id" v-if="showSwiper">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data: () => {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background-color #fff
    .wrapper
        width 100%
        height 0
        padding-bottom 31.25%
        overflow hidden
        .swiper-img
            width 100%
</style>
