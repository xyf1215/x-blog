<template>
  <div class="index">
    <div class="header clearfix">
      <div class="global-title pull-left">Admin</div>
      <ul class="pull-right list-unstyled list-inline">
        <li><router-link to="/site">站点管理</router-link></li>
        <li><router-link to="/site">内容管理</router-link></li>
        <li><a>退出</a></li>
      </ul>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .index {
    height: 100%;
  }

  .header {
    position: fixed;
    background-color: #c8c8c8;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    li {
      margin-left: 10px;
    }
  }

  .content {
    margin-top: 40px;
    height: 100%;
    position: relative;
  }
</style>
