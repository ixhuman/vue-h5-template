<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-hd">
        <div class="content-area-hd-user-avatar">
          <img src="../../../assets/avatars/4.jpg" mode="widthFix" />
        </div>
        <div class="content-area-hd-tips">
          <div class="content-area-hd-tip">看看朋友们跟你的默契度</div>
          <div class="content-area-hd-tip-a">
            {{ answerRecord.questionRecord.answerers.length }} 人答题、 {{ answerRecord.questionRecord.winners.length }} 人获奖，奖励：
            {{ answerRecord.questionRecord.prizeContent }}
          </div>
        </div>
      </div>
      <div class="content-area-bd">
        <div class="content-area-cell" v-for="(item, index) in answerRecord.list" :key="index">
          <div class="content-area-cell-hd">
            <img :src="item.avatarUrl" mode="widthFix" />
          </div>
          <div class="content-area-cell-bd">
            <div class="content-area-cell-bd-nickname">{{ item.nickname }}</div>
            <div class="content-area-cell-bd-link" @click="viewQuestion(item.answer)">偷看TA是怎么答的</div>
          </div>
          <div class="content-area-cell-ft">
            <div class="content-area-cell-ft-percent">{{ item.score }}%</div>
            <div class="content-area-cell-ft-state">{{ !item.isPass ? '未获奖' : item.isRedeem ? '已兑奖' : '未兑奖' }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main" @click="goBack">返回</div>
        <div class="operation-area-btn-main" @click="viewQuestion([])">查看题目</div>
        <div class="operation-area-btn-main bg-f8d448" @click="inviteQuestion">邀请答题</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import router from '/@/router';
  import { useAnswerRecord } from '/@/store/answerRecord';
  import { useCheckQuestion } from '/@/store/checkQuestion';

  const answerRecord = useAnswerRecord();
  answerRecord.getList();

  const checkQuestion = useCheckQuestion();

  const goBack = () => {
    // 重置
    // answerRecord.$reset();
    router.push({ path: '/question-record' });
  };

  const viewQuestion = (answer: number[]) => {
    checkQuestion.$patch({
      answer,
      questions: answerRecord.questionRecord.questions,
    });
    router.push({ path: '/check-question' });
  };

  const inviteQuestion = () => {
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
    background-image: url('../../../assets/bg.jpg');
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
  }

  .content-area {
    padding: 72px 72px 0;
  }

  .content-area-hd {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-area-hd-tip {
    font-size: 40px;
    font-weight: bold;
  }

  .content-area-hd-tip-a {
    margin-top: 8px;
    font-size: 30px;
    line-height: 38px;
    font-weight: bold;
    color: #0053ff;
  }

  .content-area-bd {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }

  .content-area-cell {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 32px;
    background-color: #fff;
    border: 4px solid #000000;
    border-radius: 16px;
    width: 100%;
    box-sizing: border-box;
  }

  .content-area-cell:not(:first-child) {
    margin-top: 32px;
  }

  .content-area-cell-hd {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    img {
      width: 88px;
      height: 88px;
      border-radius: 50%;
    }
  }

  .content-area-cell-bd {
    margin-left: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .content-area-cell-bd-nickname {
    font-size: 34px;
    font-weight: bold;
  }

  .content-area-cell-bd-link {
    font-size: 26px;
  }

  .content-area-cell-ft {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .content-area-cell-ft-percent {
    font-size: 32px;
    font-weight: bold;
  }

  .content-area-cell-ft-state {
    font-size: 28px;
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

  .bg-f8d448 {
    background-color: #f8d448;
  }
</style>
