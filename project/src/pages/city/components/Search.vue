<template>
    <div>
        <div class="search">
            <input v-model="keyworld" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" v-show="keyworld" ref="search">
            <ul>
                <li @click="handleChangeCity(item.name)" class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyworld: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleChangeCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyworld () {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      this.timer = setTimeout(() => {
        if (!this.keyworld) {
          this.list = []
          return ''
        }
        for (let key in this.cities) {
          let result = []
          this.cities[key].forEach(item => {
            if (item.spell.indexOf(this.keyworld) > -1 || item.name.indexOf(this.keyworld) > -1) {
              result.push(item)
            }
          })
          this.list = result
        }
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
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
        background-color #eee
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            background-color #fff
</style>
