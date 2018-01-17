<template>
  <div class="article-view">
    {{item}}
  </div>
</template>

<script>
import {article} from '@store/types'
import {mapState} from 'vuex'

export default {
  name: 'ArticleView',

  title () {
    return this.item.id
  },

  data: () => ({
  }),

  asyncData: ({store, route}) => store.dispatch(article.A.FETCH_ITEM, route.params.id),

  computed: {
    ...mapState({
      item: state => state.article.item
    })
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
