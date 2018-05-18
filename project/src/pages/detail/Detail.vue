<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="container"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components//Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height 50rem
</style>
