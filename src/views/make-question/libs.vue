<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-hd">
        <div class="content-area-hd-no">题库分类</div>
        <div class="content-area-hd-tags">
          <div class="content-area-hd-tag content-area-hd-tag-active">有趣灵魂</div>
          <div class="content-area-hd-tag">性格相关</div>
          <div class="content-area-hd-tag">生活三观</div>
          <div class="content-area-hd-tag">日常了解</div>
          <div class="content-area-hd-tag">假如如果</div>
          <div class="content-area-hd-tag">吃喝玩乐</div>
          <div class="content-area-hd-tag">爱情观念</div>
          <div class="content-area-hd-tag">关于我的</div>
        </div>
      </div>
      <div class="content-area-bd">
        <div class="content-area-bd-cell content-area-bd-cell-title">
          <div class="content-area-bd-cell-tag">问</div>
          <div class="content-area-bd-cell-text">我做过最多的环保活动是什么？</div>
        </div>
        <div class="content-area-bd-cell content-area-bd-cell-title">
          <div class="content-area-bd-cell-tag">问</div>
          <div class="content-area-bd-cell-text">如果文字很多酒换行显示，我做过最多的环保活动是什么？</div>
        </div>
        <div class="content-area-bd-cell content-area-bd-cell-title">
          <div class="content-area-bd-cell-tag">问</div>
          <div class="content-area-bd-cell-text">我做过最多的环保活动是什么？</div>
        </div>
        <div class="content-area-bd-cell content-area-bd-cell-title">
          <div class="content-area-bd-cell-tag">问</div>
          <div class="content-area-bd-cell-text">如果文字很多酒换行显示，我做过最多的环保活动是什么？</div>
        </div>
        <div class="content-area-bd-cell content-area-bd-cell-title">
          <div class="content-area-bd-cell-tag">问</div>
          <div class="content-area-bd-cell-text">我做过最多的环保活动是什么？</div>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <navigator url="/pages/answer/result" class="operation-area-btn-main">返回出题页面</navigator>
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
    margin-bottom: 168px;
    height: 100%;
    overflow: scroll;
  }

  .content-area-hd-no {
    font-size: 36px;
    line-height: 44px;
    font-weight: bold;
  }

  .content-area-hd-tags {
    margin-top: 20px;
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
  }

  .content-area-hd-tag {
    padding: 12px 32px;
    border: 4px solid #000000;
    border-radius: 16px;
    background-color: #fff;
  }

  .content-area-hd-tag-active {
    background-color: #f8d448;
  }

  .content-area-bd-cell {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
  }

  .content-area-bd {
    margin-top: 40px;
  }

  .content-area-bd-cell {
    border-radius: 16px;
    background-color: #fff;
    border: 4px solid #000000;
    padding: 24px 32px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
  }

  .content-area-bd-cell:not(:first-child) {
    margin-top: 40px;
  }

  .content-area-bd-cell-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;
    background-color: #000000;
    color: #fff;
    border-radius: 8px;
    padding: 6px 12px;
    width: 48px;
    text-align: center;
    box-sizing: border-box;
  }

  .content-area-bd-cell-text {
    display: flex;
    margin-left: 16px;
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;
    color: #000000;
    padding: 6px;
    flex: 1;
  }

  .content-area-bd-cell-title {
    background-color: #000000;
  }

  .content-area-bd-cell-title .content-area-bd-cell-tag {
    background-color: #fff;
    color: #000000;
  }

  .content-area-bd-cell-title .content-area-bd-cell-text {
    color: #fff;
  }

  .content-area-bd-cell-active {
    background-color: #f8d448;
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
