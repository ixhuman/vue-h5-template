<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-tips">编辑问题和答案</div>
      <div class="content-area-title">我做过最多的环保活动是什么？</div>
      <div class="content-area-cell">
        <div class="content-area-cell-hd">
          <img src="../../assets/minus.png" mode="widthFix" />
        </div>
        <div class="content-area-cell-bd"><input type="text" value="光盘行动" style="border: transparent" /></div>
      </div>
      <div class="content-area-cell">
        <div class="content-area-cell-hd">
          <img src="../../assets/minus.png" mode="widthFix" />
        </div>
        <div class="content-area-cell-bd">绿色出行</div>
      </div>
      <div class="content-area-cell">
        <div class="content-area-cell-hd">
          <img src="../../assets/minus.png" mode="widthFix" />
        </div>
        <div class="content-area-cell-bd">二次利用</div>
      </div>
      <div class="content-area-cell">
        <div class="content-area-cell-hd">
          <img src="../../assets/plus.png" mode="widthFix" />
        </div>
        <div class="content-area-cell-bd" style="color: #0053ff">添加选项</div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main" @click="save">保存并返回</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import router from '/@/router';

  const save = () => {
    router.push({ path: '/make-question' });
  };
</script>
<style lang="scss">
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

  .content-area-title {
    margin-top: 16px;
    padding: 26px 32px;
    border-radius: 16px;
    border: 4px solid #000000;
    background-color: #fff;
    font-size: 36px;
    line-height: 44px;
    font-weight: bold;
  }

  .content-area-cell:not(:first-child) {
    margin-top: 20px;
  }

  .content-area-cell {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 24px 32px;
    border-radius: 16px;
    border: 4px solid #000000;
    background-color: #fff;
  }

  .content-area-cell-hd {
    display: flex;
    img {
      width: 48px;
      height: 48px;
    }
  }

  .content-area-cell-bd {
    flex: 1;
    margin-left: 16px;
    margin-top: 3px;
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;
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
    padding: 48px 72px;
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
