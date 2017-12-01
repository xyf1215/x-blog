<template>
  <wrap>
    <div class="archive-list">
      建设中...
    </div>
  </wrap>
</template>

<script>
import Wrap from '@/views/Wrap.vue'
export default {
  name: 'ArchiveList',

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
 .archive-list {
  
 }
</style>
