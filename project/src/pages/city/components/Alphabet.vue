<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" @click="handleLetterClick" @touchstart="handleTouchStart" :ref="item"  @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data: () => {
    return {
      touchStatus: false
    }
  },
  computed: {
    letters () {
      let arr = []

      for (let item in this.cities) {
        arr.push(item)
      }

      return arr
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('handleLetterClick', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 20)
        console.log(index);
        if (index >= 0 && index < this.letters.length) {
          this.$emit('handleLetterClick', this.letters[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            line-height .4rem
            text-align center
            color $bgColor
</style>
