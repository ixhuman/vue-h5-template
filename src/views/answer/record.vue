<template>
  <!--答题/获奖记录-->
  <div class="container">
    <div class="content-area">
      <div class="content-area-cell" v-for="(item, index) in answerRecord.list" :key="index" @click="reanswerQuestion">
        <div class="content-area-cell-bd">
          <div class="content-area-cell-title" :class="item.isPass ? 'content-area-cell-title-active' : ''">{{
            item.isPass ? '奖励：' + item.prizeContent : '未获奖，去重新答题'
          }}</div>
          <div class="content-area-cell-desc">
            <div class="content-area-cell-desc-time">{{ item.createTime }}</div>
            <div class="content-area-cell-desc-result">{{ !item.isPass ? '未获奖' : item.isRedeem ? '已兑奖' : '未兑奖' }}</div>
          </div>
        </div>
        <div class="content-area-cell-ft">
          <div class="content-area-cell-ft-img">
            <img class="content-area-cell-ft-avatar" src="../../assets/avatars/2.jpg" mode="widthFix" />
          </div>
          <div class="content-area-cell-ft-img">
            <img v-if="userStore.avatarUrl" :src="userStore.avatarUrl" mode="widthFix" />
            <img v-else src="../../assets/avatars/3.jpg" mode="widthFix" />
          </div>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main" @click="goHome">返回首页</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import router from '/@/router';
  import { useAnswerRecord } from '/@/store/answerRecord';
  import { useUser } from '/@/store/user';

  const answerRecord = useAnswerRecord();
  const userStore = useUser();

  const openid = userStore.openid;

  (async () => {
    var c = new window.cloud.Cloud({
      // appid: 'wxd4832b465764a784',
      identityless: true, // 表示是未登录模式
      resourceAppid: 'wx50375099287064d3',
      resourceEnv: 'env-prod-7geqkmur35ee26ed',
    });

    // 初始化云开发
    await c.init();
    const _ = c.database().command;
    // 答题记录
    const resA = await c.database().collection('answers').where({ openid }).orderBy('createTime', 'desc').get();
    console.log('answerRecord.res', resA);
    if ('collection.get:ok' == resA.errMsg && resA.data.length) {
      answerRecord.answers = resA.data;
    }

    // 获取出题id
    const questionIds = answerRecord.getQuestionIds();
    console.log('questionIds', questionIds);

    if (questionIds.length) {
      // 出题记录
      const resQ = await c
        .database()
        .collection('questions')
        .where({ _id: _.in(questionIds) })
        .get();
      console.log('questionRecord.res', resQ);
      if ('collection.get:ok' == resQ.errMsg && resQ.data.length) {
        answerRecord.questions = resQ.data;
      }
    }

    const quesitonOpenids = answerRecord.quesitonOpenids();
    console.log('quesitonOpenids', quesitonOpenids);

    if (quesitonOpenids.length) {
      // 出题人
      const resQU = await c
        .database()
        .collection('users')
        .where({ openid: _.in(quesitonOpenids) })
        .get();
      console.log('user.res', resQU);
      if ('collection.get:ok' == resQU.errMsg && resQU.data.length) {
        answerRecord.creaters = resQU.data;
      }
    }

    answerRecord.getList();
  })();

  const reanswerQuestion = () => {
    router.push({ path: '/answer-question' });
  };

  const goHome = () => {
    router.push({ path: '/' });
  };
</script>
<style lang="scss" scoped>
  .container {
    background-color: #d0d1ff;
    min-height: 100vh;
    height: 100%;
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
    padding: 72px 72px 240px;
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
    // margin-bottom: 48px;
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
