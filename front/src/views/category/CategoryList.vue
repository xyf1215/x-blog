<template>
  <wrap>
    <div class="category-list">
      建设中...
    </div>
  </wrap>
</template>

<script>
import Wrap from '@/views/Wrap.vue'
export default {
  name: 'CategoryList',

  title () {
    return ''
  },

  data: () => ({
    loading: true
  }),

  methods: {
  },

  components: {
    Wrap
  }
}
</script>

<style lang="less" scoped>
 .category-list {
  
 }
</style>
