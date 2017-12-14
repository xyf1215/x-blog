<template>
  <div class="sidebar">
    <div class="global-title">rhett's blog</div>
    <div class="menu-wrap">
      <ul class="text-center list-unstyled">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/article">文章</router-link></li>
        <li><router-link to="/category">分类</router-link></li>
        <li><router-link to="/archive">归档</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
        <li><a href="https://github.com/xyf1215/">github</a></li>
      </ul>
    </div>
    <div class="footer text-center">
      <div>©&nbsp;2017</div>
      <div>总访问人数：{{comdify('9999')}}</div>
    </div>
  </div>
</template>

<script>
export default {
  // title () {
  //   return '建设中...'
  // },
  methods: {
    comdify(value = '') {
      return value.replace(/^(\d+)((\.\d+)?)$/, (s, s1, s2) => s1.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,') + s2)
    }
  }
}
</script>

<style lang="less" scoped>
  .sidebar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding-bottom: 40px;
  }

  .global-title {
    font-size: 18px;
    font-weight: bold;
    font-size: #333;
  }

  .menu-wrap {
    li {
      margin: 5px 0;
      font-size: 14px;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    font-size: 12px;
    height: 40px;
    line-height: 20px;
  }
</style>
