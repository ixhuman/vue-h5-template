<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-cells">
        <div class="content-area-cells-no">第 1 题 </div>
        <div class="content-area-cells-mian">
          <div class="content-area-cell content-area-cell-title">
            <div class="content-area-cell-tag">问</div>
            <div class="content-area-cell-text">我做过最多的环保活动是什么？</div>
          </div>
          <div class="content-area-cell">
            <div class="content-area-cell-tag">A</div>
            <div class="content-area-cell-text">光盘行动</div>
          </div>
        </div>
      </div>
      <div class="content-area-cells">
        <div class="content-area-cells-no">第 2 题 </div>
        <div class="content-area-cells-mian">
          <div class="content-area-cell content-area-cell-title">
            <div class="content-area-cell-tag">问</div>
            <div class="content-area-cell-text">我做过最多的环保活动是什么？</div>
          </div>
          <div class="content-area-cell">
            <div class="content-area-cell-tag">A</div>
            <div class="content-area-cell-text">光盘行动</div>
          </div>
        </div>
      </div>
      <div class="content-area-cells">
        <div class="content-area-cells-no">第 3 题 </div>
        <div class="content-area-cells-mian">
          <div class="content-area-cell content-area-cell-title">
            <div class="content-area-cell-tag">问</div>
            <div class="content-area-cell-text">我做过最多的环保活动是什么？</div>
          </div>
          <div class="content-area-cell">
            <div class="content-area-cell-tag">A</div>
            <div class="content-area-cell-text">光盘行动</div>
          </div>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main" @click="goBack">返回</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import router from '/@/router';

  const goBack = () => {
    router.push({ path: '/answer-detail' });
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
    margin-bottom: 240px;
    height: 100vh;
    overflow: scroll;
  }

  .content-area-cells-no {
    font-size: 34px;
    line-height: 42px;
    font-weight: bold;
  }

  .content-area-cells-mian {
    margin-top: 28px;
    margin-bottom: 28px;
  }

  .content-area-cells:not(:first-child) {
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
    margin-top: 32px;
  }

  .content-area-cell-bd {
    border-radius: 8px;
    border: 2px solid #000000;
    padding: 8px 12px;
    margin-top: 20px;
    background-color: #fff;
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

  .operation-area {
    position: fixed;
    bottom: 0;
    background-color: #d0d1ff;
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
    background-color: #f8d448;
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
