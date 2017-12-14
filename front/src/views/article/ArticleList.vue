<template>
  <div class="article-list">
    <div v-for="article in articleList" :key="article._id">
      <a>
        {{article.title}}
      </a>
    </div>
  </div>
</template>

<script>
import {articleList} from '@/store/types'
import {mapState} from 'vuex'

export default {
  name: 'ArticleList',

  title () {
    return '文章列表'
  },

  data: () => ({
    loading: true
  }),

  computed: {
    ...mapState({
      articleList: state => state.articleList.articleList
    })
  },

  asyncData: ({store, route}) => store.dispatch(articleList.A.FETCH_LIST),

  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
