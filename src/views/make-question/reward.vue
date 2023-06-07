<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-hd">
        <div class="content-area-hd-user-avatar">
          <img src="../../assets/avatars/4.jpg" mode="widthFix" />
        </div>
        <div class="content-area-hd-tips">
          <div class="content-area-hd-tip">默契好友才能获得奖励</div>
        </div>
      </div>
      <div class="content-area-bd">
        <div class="content-area-cell">
          <div class="content-area-cell-hd">答题奖励</div>
          <div class="content-area-cell-ft icon-arrow"> 自定义奖励 </div>
        </div>
        <div class="content-area-cell">
          <div class="content-area-cell-hd">自定义奖励</div>
          <div class="content-area-cell-ft">点击填写</div>
        </div>
        <div class="content-area-cell">
          <div class="content-area-cell-hd">至少答对</div>
          <div class="content-area-cell-ft icon-arrow">8题</div>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main">返回修改出题</div>
        <div class="operation-area-btn-main bg-f8d448" @click="confirmMakeQuestion">确认出题</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import router from '/@/router';

  const confirmMakeQuestion = () => {
    router.push({ path: '/share' });
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
    flex: 2;
    padding: 72px 72px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-area-hd {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .content-area-hd-user-avatar {
    width: 192px;
    height: 192px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 174px;
      height: 174px;
      border-radius: 50%;
    }
  }

  .content-area-hd-tips {
    margin-top: 64px;
  }

  .content-area-hd-tip {
    font-size: 36px;
    line-height: 44px;
    font-weight: bold;
  }

  .content-area-bd {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
  }

  .content-area-cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    line-height: 48px;
    font-size: 34px;
    font-weight: bold;
    border-radius: 16px;
    background-color: #fff;
    border: 4px solid #000000;
    width: 100%;
    box-sizing: border-box;
  }

  .content-area-cell-ft {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    vertical-align: middle;
    color: #0053ff;
  }

  .icon-arrow {
    padding-right: 40px;
    position: relative;
  }

  .icon-arrow:after {
    content: ' ';
    width: 24px;
    height: 48px;
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    mask-size: 100%;
    background-color: #000000;
    color: var(--weui-FG-2);
    -webkit-mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
    mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -24px;
  }

  .operation-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 48px 72px;
    box-sizing: border-box;
  }

  .operation-area-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 0;
    gap: 32px;
  }

  .operation-area-btn-main {
    flex: 1;
    position: relative;
    font-size: 34px;
    line-height: 42px;
    font-weight: bold;
    padding: 16px 4px;
    background-color: #ffffff;
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

  .bg-f8d448 {
    background-color: #f8d448;
  }
</style>
