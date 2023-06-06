<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-cell">
        <div class="content-area-cell-bd">
          <div class="content-area-cell-title content-area-cell-title-active">奖励：做一天CP</div>
          <div class="content-area-cell-desc"> 10人答题、5人获奖 </div>
        </div>
        <div class="content-area-cell-ft icon-arrow"> </div>
      </div>
      <div class="content-area-cell">
        <div class="content-area-cell-bd">
          <div class="content-area-cell-title content-area-cell-title-active">奖励：做一天CP</div>
          <div class="content-area-cell-desc"> 10人答题、5人获奖 </div>
        </div>
        <div class="content-area-cell-ft icon-arrow"> </div>
      </div>
      <navigator url="/pages/my-question/detail" class="content-area-cell">
        <div class="content-area-cell-bd">
          <div class="content-area-cell-title content-area-cell-title-active">奖励：做一天CP</div>
          <div class="content-area-cell-desc"> 10人答题、5人获奖 </div>
        </div>
        <div class="content-area-cell-ft icon-arrow"> </div>
      </navigator>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <navigator url="/pages/home/index" class="operation-area-btn-main">返回首页</navigator>
      </div>
    </div>
  </div>
</template>
<script lang="ts"></script>
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
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border: 4px solid #000000;
    border-radius: 16px;
    padding: 32px;
    box-sizing: border-box;
  }

  .content-area-cell:not(:first-child) {
    margin-top: 32px;
  }

  .content-area-cell-title {
    font-size: 36px;
  }

  .content-area-cell-title-active {
    color: #0053ff;
  }

  .content-area-cell-desc {
    font-size: 28px;
  }

  .icon-arrow {
    padding-right: 48px;
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
    background-color: currentColor;
    color: var(--weui-FG-2);
    -webkit-mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
    mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -24px;
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
