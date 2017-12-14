<template>
  <div class="index" :class="{sidebar: hasSidebar}">
    <div v-show="hasSidebar" class="sidebar-wrap">
      <sidebar></sidebar>
    </div>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/views/Sidebar.vue'
export default {
  // title () {
  //   return '建设中...'
  // },
  computed: {
    hasSidebar() {
      return this.$route.meta.sidebar !== false
    }
  },
  components: {
    Sidebar
  }
}
</script>

<style lang="less" scoped>
  .index {
    height: 100%;
    &.sidebar {
      .content {
        margin-left: 160px;
      }
    }
  }
  .sidebar-wrap {
    overflow: hidden;
    width: 160px;
    height: 100%;
    border-right: 1px dashed rgba(192, 192, 192, .8);
    position: relative;
  }
  .content {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 10px 20px;
    overflow: auto;
  }
</style>
