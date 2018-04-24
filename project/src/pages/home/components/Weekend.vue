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
  data () {
    return {
      weekendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
        title: '北京赏花好地方',
        desc: '乱花渐欲迷人眼，京城赏花大搜索'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '北京必游TOP10',
        desc: '来北京必去的景点非这些地方莫属'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        title: '寻找北京的皇城范儿',
        desc: '数百年的宫廷庙宇，至今依旧威严霸气'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
        title: '学生最爱的博物馆',
        desc: '周末干嘛？北京很多博物馆已经免费开放啦'
      }]
    }
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
