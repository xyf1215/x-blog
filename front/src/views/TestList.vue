<template>
  <div class="test-list" v-if="items.length">
    <ul>
      <li v-for="item in items" :key="item.id">
        <router-link :to="{ path: '/test/' + item.id}">{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {test} from '@store/types'
import {mapState} from 'vuex'

export default {
  name: 'TestList',

  title () {
    return 'Home'
  },

  data: () => ({
    loading: true
  }),

  asyncData: ({store, route}) => store.dispatch(test.A.FETCH_ITEMS),

  computed: {
    ...mapState({
      items: state => state.test.items
    })
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  li {
    a {
      color: #f33;
    }
  }
</style>
