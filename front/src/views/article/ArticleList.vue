<template>
  <div class="article-list">
    <ul>
      <li v-for="item in list.pdata" :key="item._id">
        <section class="item">
          <header class="clearfix">
            <div class="col-9 title">{{item.title}}</div>
            <div class="col-3 time">{{item.timeStr}}</div>
          </header>
          <main>
            {{item.body}}
          </main>
          <footer>
            <router-link :to="{path: '/article/' + item._id}">阅读全文&gt;&gt;</router-link>
          </footer>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
import {article} from '@/store/types'
import {mapState, mapActions} from 'vuex'

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
      list: state => state.article.list,
      size: state => state.article.size,
      num: state => state.article.num
    })
  },

  asyncData: ({store, route}) => store.dispatch(article.A.FETCH_LIST),

  methods: {
    ...mapActions({
      fetchList: article.A.FETCH_LIST
    }),
    query() {
      this.fetchList()
    }
  }
}
</script>

<style lang="less" scoped>
  li {
    border-bottom: 1px solid #ccc;
  }

  section.item {
    margin: 10px 0;
    header {
      line-height: 24px;
      .title {
        font-size: 24px;
        font-weight: bold;
      }
      .time {
        text-align: right;
      }
    }
    main {
      margin: 10px 0;
    }

    footer {
      font-size: 14px;
    }
  }
</style>
