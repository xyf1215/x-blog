<template>
  <div class="footbar text-center">
    <span>©&nbsp;2017</span>
    <span>总访问人数：1234</span>
  </div>
</template>

<script>

export default {
  name: 'FootBar',
  data: () => ({
    loading: true
  }),
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .footbar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 12px;
    &>span {
      &:first-child {
        margin-left: 0;
      }
      margin-left: 10px;
    }
  }
</style>
