<template>
  <div class="sub-index">
    <ul class="sub-menu list-unstyled">
      <li><router-link to="/site">文章管理</router-link></li>
      <li><router-link to="/site">分类管理</router-link></li>
    </ul>
    <div class="sub-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
  .sub-menu {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 160px;
    background-color: #eaeaea;
    li {
      padding: 10px 20px;
      border-bottom: 1px solid #ccc;
    }
  }

  .sub-content {
    margin-left: 160px;
    padding: 5px;
  }
</style>

