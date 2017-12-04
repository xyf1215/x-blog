<template>
  <div class="home">
   <p class="text-center global-title">rhett's blog</p>
   <p class="text-center sub-title">coder & fe</p>
   <ul class="text-center list-unstyled list-inline menu-list p">
     <li><router-link to="/article">文章</router-link></li>
     <li><router-link to="/category">分类</router-link></li>
     <li><router-link to="/archive">归档</router-link></li>
     <li><router-link to="/about">关于</router-link></li>
     <li><a href="https://github.com/xyf1215/">github</a></li>
   </ul>
  </div>
</template>

<script>
// import {test} from '@store/types'
import {mapState} from 'vuex'

export default {
  name: 'Home',

  title () {
    return ''
  },

  data: () => ({
    loading: true
  }),
  // asyncData: ({store, route}) => store.dispatch(test.A.FETCH_ITEMS),

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
 .home {
   position: relative;
   margin: 0 auto;
   top: 35%;
   width: 500px;
 }

 .global-title {
   color: #333;
   font-size: 24px;
   font-weight: bold;
 }

 .sub-title {
   font-size: 18px;
 }

 .menu-list {
   li {
     font-size: 14px;
     margin: 0 5px;
   }
 }
</style>
