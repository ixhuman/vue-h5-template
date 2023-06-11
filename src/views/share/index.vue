<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-tip"> 长按图片保存到相册，晒到票圈~ </div>
      <div class="content-area-image">
        <img src="../../assets/share.png" mode="widthFix" />
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main" @click="goHome">去公众号查看答题情况</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import router from '/@/router';

  const goHome = () => {
    router.push({ path: '/' });
  };
</script>
<style lang="scss" scoped>
  .container {
    background-color: #d0d1ff;
    height: 100vh;
    width: 100vw;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-image: url('../../assets/bg.jpg');
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
  }

  .content-area {
    padding: 72px 72px 0;
    box-sizing: border-box;
  }

  .content-area-tip {
    font-size: 34px;
    font-weight: bold;
    text-align: center;
  }

  .content-area-image {
    margin-top: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }

  .operation-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 72px;
    box-sizing: border-box;
  }

  .operation-area-btn {
    width: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
  }

  .operation-area-btn-main {
    position: relative;
    font-size: 36px;
    font-weight: bold;
    padding: 16px 32px;
    background-color: #fff;
    border: 4px solid #000000;
    border-radius: 16px;
    width: 100%;
    text-align: center;
  }

  .operation-area-btn-main::before {
    position: absolute;
    content: ' ';
    top: 4px;
    left: -4px;
    width: 100%;
    height: 100%;
    background-color: #c39e35;
    border: 4px solid #000000;
    border-radius: 16px;
    z-index: -1;
  }
</style>
