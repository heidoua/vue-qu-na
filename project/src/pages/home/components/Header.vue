<template>
  <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe60e;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe600;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                <!-- 两个inline元素之间可能存在空白间距，可以给父级设置fontsize0，子元素再设置对应的字体即可 -->
                {{this.$store.state.city}}
                <span class="iconfont arrow-icon">&#xe791;</span>
            </div>
        </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
        display: flex
        line-height: $headerHeight
        background-color: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size : .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            color: #ccc
            margin-top: .12rem
            margin-left: .2rem
            padding-left : .2rem
            background-color:#fff
            border-radius: .1rem
        .header-right
            width: 1.24rem
            color: #fff
            float: right
            text-align: center
            .arrow-icon
                margin-left : -.04rem
</style>
