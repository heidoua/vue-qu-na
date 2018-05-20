<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="container"></div>
  </div>
</template>

<script>
import axios from 'axios'
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
      list: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSuccess)
    },
    handleGetDataSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.categoryList
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height 50rem
</style>
