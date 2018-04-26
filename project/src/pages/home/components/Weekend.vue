<template>
  <div>
     <div class="weekend-title">周末去哪儿</div>
     <ul>
         <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
             <div class="item-img-wrapper">
                 <img class="item-img" :src="item.imgUrl" alt="">
             </div>
             <div class="item-info">
                 <p class="item-title">{{item.title}}</p>
                 <p class="item-desc">{{item.desc}}</p>
             </div>
         </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .weekend-title
        line-height .8rem
        background-color #eeeeee
        text-indent .2rem
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
            font-size .28rem
            ellipsis()
        .item-desc
            font-size 0.24rem
            line-height .4rem
            color #cccccc
            ellipsis()
</style>
