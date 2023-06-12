<template>
  <div class="container">
    <div class="head-area">
      <div class="head-area-img">
        <img class="head-area-img-logo" src="../../assets/logo.png" mode="widthFix" />
        <img class="head-area-img-banner" src="../../assets/banner.png" mode="widthFix" />
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main" @click="startMakeQuestion">开始出题</div>
      </div>
      <div class="operation-area-btn-sub">
        <div class="operation-area-btn-sub-main" @click="myQuestionRecord">我的出题记录</div>
        <div class="operation-area-btn-sub-main" @click="answerRecord">答题/获奖记录</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import router from '/@/router';

  const startMakeQuestion = () => {
    router.push({ path: 'make-question' });
  };

  const myQuestionRecord = () => {
    router.push({ path: 'question-record' });
  };

  const answerRecord = () => {
    router.push({ path: 'answer-record' });
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

  .head-area {
    flex: 3;
    width: 100%;
    position: relative;
  }

  .head-area-img {
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
      width: 70%;
    }
  }

  .operation-area {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0 72px;
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
    width: 100%;
    font-size: 36px;
    font-weight: bold;
    padding: 16px 32px;
    background-color: #f8d448;
    border: 4px solid #000000;
    border-radius: 16px;
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

  .operation-area-btn-sub {
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 0;
    gap: 32px;
  }

  .operation-area-btn-sub-main {
    position: relative;
    flex: 1;
    font-size: 34px;
    padding: 16px;
    background-color: #fff;
    border: 4px solid #000000;
    border-radius: 16px;
    text-align: center;
  }

  .operation-area-btn-sub-main:before {
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
