<template>
  <wrap>
    <div class="article-list">
      建设中...
    </div>
  </wrap>
</template>

<script>
import Wrap from '@/views/Wrap.vue'
export default {
  name: 'ArticleList',

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
 .article-list {
  
 }
</style>
