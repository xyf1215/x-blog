<template>
  <div class="test-view" >
    {{item}}
    <img src="../assets/images/cat.jpg">
  </div>
</template>

<script>
import {test} from '@store/types'
import {mapState} from 'vuex'

export default {
  name: 'TestView',

  title () {
    return this.item.id
  },

  data: () => ({
    loading: true
  }),

  asyncData: ({store, route}) => store.dispatch(test.A.FETCH_ITEMS),

  computed: {
    ...mapState({
      item(state) {
        return state.test.items.find(({id}) => id === parseInt(this.$route.params.id, 10))
      }
    })
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
