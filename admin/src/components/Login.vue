<template>
  <div class="login">
    <form>
      <h4>欢迎</h4>
      <div class="flex">
        <label>用户名：</label>
        <input>
      </div>
      <div class="flex">
        <label>密码：</label>
        <input>
      </div>
      <div>
        <button type="button">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  border: 1px solid #ccc;
  width: 400px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
  border-radius: 4px;
}
</style>
