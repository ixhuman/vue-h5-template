<template>
  <!--答题/获奖记录-->
  <div class="container">
    <div class="content-area">
      <div class="content-area-cell">
        <div class="content-area-cell-bd">
          <div class="content-area-cell-title content-area-cell-title-active">奖励：做一天CP</div>
          <div class="content-area-cell-desc">
            <div class="content-area-cell-desc-time">09-05 16:52</div>
            <div class="content-area-cell-desc-result">未兑奖</div>
          </div>
        </div>
        <div class="content-area-cell-ft">
          <div class="content-area-cell-ft-img">
            <img class="content-area-cell-ft-avatar" src="../../assets/avatars/2.jpg" mode="widthFix" />
          </div>
          <div class="content-area-cell-ft-img">
            <img src="../../assets/avatars/3.jpg" mode="widthFix" />
          </div>
        </div>
      </div>
      <div class="content-area-cell">
        <div class="content-area-cell-bd">
          <div class="content-area-cell-title content-area-cell-title-active">奖励：做一天CP</div>
          <div class="content-area-cell-desc">
            <div class="content-area-cell-desc-time">09-05 16:52</div>
            <div class="content-area-cell-desc-result">已兑奖</div>
          </div>
        </div>
        <div class="content-area-cell-ft">
          <div class="content-area-cell-ft-img">
            <img class="content-area-cell-ft-avatar" src="../../assets/avatars/2.jpg" mode="widthFix" />
          </div>
          <div class="content-area-cell-ft-img">
            <img src="../../assets/avatars/3.jpg" mode="widthFix" />
          </div>
        </div>
      </div>
      <div class="content-area-cell">
        <div class="content-area-cell-bd">
          <div class="content-area-cell-title">未获奖，去重新答题</div>
          <div class="content-area-cell-desc">
            <div class="content-area-cell-desc-time">09-05 16:52</div>
            <div class="content-area-cell-desc-result">未兑奖</div>
          </div>
        </div>
        <div class="content-area-cell-ft">
          <div class="content-area-cell-ft-img">
            <img class="content-area-cell-ft-avatar" src="../../assets/avatars/2.jpg" mode="widthFix" />
          </div>
          <div class="content-area-cell-ft-img">
            <img src="../../assets/avatars/3.jpg" mode="widthFix" />
          </div>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <navigator url="/pages/home/index" class="operation-area-btn-main" @click="goHome">返回首页</navigator>
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
  }

  .content-area-cell {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    border: 4px solid #000000;
    border-radius: 16px;
    padding: 32px;
  }

  .content-area-cell:not(:first-child) {
    margin-top: 32px;
  }

  .content-area-cell-bd {
    flex: 1;
  }

  .content-area-cell-title {
    font-size: 36px;
    line-height: 44px;
    font-weight: bold;
  }

  .content-area-cell-title-active {
    color: #0053ff;
  }

  .content-area-cell-desc {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 28px;
    line-height: 36px;
    margin-top: 8px;
  }

  .content-area-cell-desc-time {
    padding-right: 12px;
  }

  .content-area-cell-desc-result {
    position: relative;
    padding-left: 12px;
  }

  .content-area-cell-desc-result::before {
    content: ' ';
    position: absolute;
    top: 4px;
    left: 0;
    width: 1px;
    height: 24px;
    background-color: #000000;
  }

  .content-area-cell-ft {
    position: relative;
    width: 88px;
    display: flex;
    justify-content: center;
  }

  .content-area-cell-ft-img {
    width: 40px;
    height: 48px;
    text-align: center;
  }

  .content-area-cell-ft img {
    width: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
  }

  .content-area-cell-ft-avatar::before {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.36);
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
    margin-top: 48px;
    margin-bottom: 48px;
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
