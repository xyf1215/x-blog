<template>
  <div id="app">
    <div id="particles-js"></div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
// import particlesConfig from '@/util/particlesConfig'

export default {
  mounted() {
    // window.particlesJS('particles-js', particlesConfig)
  }
}
</script>

<style lang="less" scoped>
  #particles-js {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
</style>

