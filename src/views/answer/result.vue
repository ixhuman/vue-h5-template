<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-hd">
        <div class="content-area-hd-user-avatar">
          <img src="../../assets/avatars/4.jpg" mode="widthFix" />
        </div>
        <div class="content-area-hd-tips">
          <div class="content-area-hd-tip">快来找我兑奖吧</div>
          <div class="content-area-hd-tip-m">
            你答对了 {{ answerQuestion.getCorrectNumber }}/{{ answerQuestion.total }} 题，默契度 {{ answerQuestion.getScore }}%
          </div>
        </div>
      </div>
      <div class="content-area-bd">
        <div class="content-area-cell">
          <div class="content-area-cell-main">
            <div class="content-area-cell-main-title content-area-cell-main-title-active">奖励：{{ answerQuestion.prizeContent }}</div>
            <div class="content-area-cell-main-desc"> 请找出题人兑奖后再确认 </div>
          </div>
          <div
            class="content-area-cell-btn"
            :class="!answerQuestion.isPass ? 'content-area-cell-main-title-not-active' : ''"
            v-if="!answerQuestion.isPass"
          >
            未中奖
          </div>
          <div class="content-area-cell-btn" :class="answerQuestion.isRedeem ? 'content-area-cell-main-title-active' : ''" v-else>
            <template v-if="answerQuestion.isRedeem">已兑奖</template>
            <template v-else>确认兑奖</template>
          </div>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn" v-if="!answerQuestion.isPass">
        <div class="operation-area-btn-main" @click="reanswerQuestion">再来一次机会，重新答题</div>
      </div>
      <div class="operation-area-btn-sub">
        <div class="operation-area-btn-sub-main" @click="goHome">返回</div>
        <div class="operation-area-btn-sub-main" @click="makeQuestion">我也要出题</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import router from '/@/router';
  import { useAnswerQuestion } from '/@/store/answerQuestion';

  const answerQuestion = useAnswerQuestion();

  const goHome = () => {
    router.push({ path: '/' });
  };

  // 重新答题
  const reanswerQuestion = () => {
    answerQuestion.$reset();
    router.push({ path: '/doing-question' });
  };

  const makeQuestion = () => {
    router.push({ path: '/make-question' });
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

  .content-area-hd {
    margin-top: 8px;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-area-hd-tip {
    font-size: 36px;
    line-height: 44px;
    font-weight: bold;
  }

  .content-area-hd-tip-m {
    margin-top: 16px;
    font-size: 28px;
    line-height: 36px;
  }

  .content-area-bd {
    margin-top: 50px;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .content-area-cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    border-radius: 16px;
    background-color: #fff;
    border: 4px solid #000000;
    width: 100%;
    box-sizing: border-box;
  }

  .content-area-cell:not(:first-child) {
    margin-top: 32px;
  }

  .content-area-cell-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .content-area-cell-main-title {
    font-size: 34px;
    line-height: 48px;
    font-weight: bold;
  }

  .content-area-cell-main-desc {
    margin-top: 8px;
    font-size: 28px;
    line-height: 36px;
  }

  .content-area-cell-btn {
    font-size: 32px;
    line-height: 40px;
    font-weight: bold;
    border-radius: 16px;
    background-color: #f8d448;
    border: 4px solid #000000;
    padding: 24px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 160px;
  }

  .content-area-cell-main-title-active {
    color: #0053ff;
  }
  .content-area-cell-main-title-not-active {
    background-color: #fff;
    border: 4px solid #c6c6c6;
    color: #c6c6c6;
  }

  .operation-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    line-height: 48px;
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
