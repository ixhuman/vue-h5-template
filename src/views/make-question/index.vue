<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-hd">
        <div class="content-area-hd-no">第 1 / 10 题</div>
        <div class="content-area-hd-tip">请点击你认可的选项</div>
      </div>
      <div class="content-area-bd">
        <div class="content-area-cell content-area-cell-title">
          <div class="content-area-cell-tag">问</div>
          <div class="content-area-cell-text">我做过最多的环保活动是什么？</div>
        </div>
        <div class="content-area-cell">
          <div class="content-area-cell-tag">A</div>
          <div class="content-area-cell-text">光盘行动</div>
        </div>
        <div class="content-area-cell content-area-cell-active" @click="setReward">
          <div class="content-area-cell-tag">B</div>
          <div class="content-area-cell-text">选中后变黄，然后自动转下一题</div>
        </div>
        <div class="content-area-cell">
          <div class="content-area-cell-tag">C</div>
          <div class="content-area-cell-text">二次利用</div>
        </div>
        <div class="content-area-cell">
          <div class="content-area-cell-tag">D</div>
          <div class="content-area-cell-text">节约用电</div>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main">上一题</div>
        <div class="operation-area-btn-main" @click="changeQuestion">换一道题</div>
        <div class="operation-area-btn-main" @click="editQuestion">修改本题</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import router from '/@/router';

  const changeQuestion = () => {
    router.push({ path: '/question-lib' });
  };

  const editQuestion = () => {
    router.push({ path: '/edit-question' });
  };

  const setReward = () => {
    router.push({ path: '/set-reward' });
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
  }

  .content-area-hd-no {
    font-size: 36px;
    line-height: 48px;
    font-weight: bold;
  }

  .content-area-hd-tip {
    font-size: 28px;
    line-height: 42px;
  }

  .content-area-bd {
    margin-top: 48px;
  }

  .content-area-cell {
    border-radius: 16px;
    background-color: #fff;
    border: 4px solid #000000;
    padding: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
  }

  .content-area-cell:not(:first-child) {
    margin-top: 40px;
  }

  .content-area-cell-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    // line-height: 1.4;
    font-weight: bold;
    background-color: #000000;
    color: #fff;
    border-radius: 8px;
    padding: 4px 12px;
    width: 48px;
    text-align: center;
    box-sizing: border-box;
  }

  .content-area-cell-text {
    display: flex;
    margin-left: 16px;
    font-size: 28px;
    font-weight: bold;
    color: #000000;
    padding: 4px 2px;
    flex: 1;
  }

  .content-area-cell-title {
    background-color: #000000;
  }

  .content-area-cell-title .content-area-cell-tag {
    background-color: #fff;
    color: #000000;
  }

  .content-area-cell-title .content-area-cell-text {
    color: #fff;
  }

  .content-area-cell-active {
    background-color: #f8d448;
  }

  .operation-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 48px;
    padding: 72px;
    box-sizing: border-box;
  }

  .operation-area-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 0;
    gap: 16px;
  }

  .operation-area-btn-main {
    flex: 1;
    position: relative;
    background-color: #ffffff;
    font-size: 34px;
    line-height: 42px;
    font-weight: bold;
    padding: 16px 4px;
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
</style>
