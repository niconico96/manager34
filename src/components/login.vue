<template>
  <div class="login">
    <div class="form-box"></div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang='less' scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #324152;
  display: flex;
  // 水平方向 对其方式 center居中
  justify-content: center;
  // 垂直方向的对其方式 center 居中
  align-items: center;
  .form-box {
    width: 580px;
    height: 435px;
    border-radius: 10px;
    background-color: white;
  }
}
</style>
