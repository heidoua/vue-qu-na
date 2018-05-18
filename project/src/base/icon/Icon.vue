<template>
  <i :class="'iconfont icon-'+name + ' ' +className"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    className: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>
