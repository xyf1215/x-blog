<template>
  <div id="app">
    <div id="particles-js"></div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <footbar></footbar>
  </div>
</template>
<script>
import particlesConfig from '@/util/particlesConfig'
import Footbar from '@/views/Footbar.vue'

export default {
  mounted() {
    window.particlesJS('particles-js', particlesConfig)
  },
  components: {
    Footbar
  }
}
</script>

<style lang="less">
html, body, #app {
  height: 100%;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f6f6f6;
  color: #555;
  margin: 0;
  overflow-y: auto;
  padding: 5px;
}
a {
  text-decoration: none;
  color: #555;
}

p, ul {
  margin: 0;
}

p, .p {
  padding-top: 5px;
  padding-bottom: 5px;
}

.text-center {
  text-align: center;
}

.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>

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

