<template>
  <div class="list-view">
    <ul>
      <li v-for="item in list[dataNode]" :key="item[trackId]">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      required: true
    },
    dataNode: {
      type: String,
      default: 'pdata'
    },
    trackId: {
      type: String,
      default: '_id'
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
