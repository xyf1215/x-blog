<template>
  <div class="header clearfix">
    <div class="global-title pull-left">rhett's blog</div>
    <div class="menu-wrap pull-right">
      <ul class="text-center list-unstyled list-inline">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/article">文章</router-link></li>
        <li><router-link to="/category">分类</router-link></li>
        <li><router-link to="/archive">归档</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
        <li><a href="https://github.com/xyf1215/">github</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  title () {
    return '建设中...'
  }
}
</script>

<style lang="less" scoped>
  .header {
    padding: 10px 0;
  }
  .global-title {
    font-size: 18px;
    font-weight: bold;
    font-size: #333;
  }
  .menu-wrap {
    li {
      font-size: 14px;
      margin: 0 5px;
    }
  }
</style>
