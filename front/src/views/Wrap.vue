<template>
  <div class="wrap">
    <x-header></x-header>
    <div id="content">
      <slot></slot>
    </div>
    <x-footer></x-footer>
  </div>
</template>

<script>
import XHeader from '@/views/Header.vue'
import XFooter from '@/views/Footer.vue'
export default {
  title () {
    return '建设中...'
  },
  components: {
    XHeader,
    XFooter
  }
}
</script>

<style lang="less" scoped>
  .wrap {
    width: 800px;
    margin: 0 auto;
  }
</style>
