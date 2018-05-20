<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="container"></div>
  </div>
</template>

<script>
import DetailList from './components/List'
import DetailBanner from './components/Banner'
import DetailHeader from './components//Header'
export default {
  name: 'Detail',
  components: {
    DetailList,
    DetailBanner,
    DetailHeader
  },
  data () {
    return {
      list: [{
        title: '世界名人',
        children: [{
          title: '1111',
          children: [{
            title: '666666'
          }, {
            title: '6666'
          }]
        }, {
          title: '2222'
        }, {
          title: '2222'
        }]
      }, {
        title: '世界名人'
      }, {
        title: '世界名人'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height 50rem
</style>
