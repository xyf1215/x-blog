<template>
  <wrap>
    <div class="about-index">
      建设中...
    </div>
  </wrap>
</template>

<script>
import Wrap from '@/views/Wrap.vue'
export default {
  name: 'AboutIndex',

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
 .about-index {
  
 }
</style>
