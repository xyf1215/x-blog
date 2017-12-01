<template>
  <i class="icon" :class="[group, name]" @click="$emit('click', $event)"></i>
</template>
<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    group() {
      return this.name.indexOf('icon-') === 0 ? 'iconfont' : ''
    }
  }
}
</script>
