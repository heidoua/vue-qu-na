<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content">
            <ul>
                <li>hello world</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height 0.72rem
        padding 0 .1rem
        background-color $bgColor
        .search-input
            box-sizing border-box
            width 100%
            height 0.62rem
            line-height .62rem
            text-align center
            border-radius .06rem
            color #666666
            padding 0 .1rem
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        background-color green
</style>
