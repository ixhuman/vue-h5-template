<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-cell" v-for="(item, index) in questionRecord.list" :key="index" @click="detail(item)">
        <div class="content-area-cell-bd">
          <div class="content-area-cell-title content-area-cell-title-active">奖励：{{ item.prizeContent }}</div>
          <div class="content-area-cell-desc">
            {{ item.answererNum ? item.answererNum : 0 }}人答题、{{ item.winnerNum ? item.winnerNum : 0 }}人获奖
          </div>
        </div>
        <div class="content-area-cell-ft icon-arrow"></div>
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
  import { useQuestionRecord } from '/@/store/questionRecord';
  import { IQuesitonRecord } from '/@/api/questionRecord';
  import { useUser } from '/@/store/user';

  const questionRecord = useQuestionRecord();
  const userStore = useUser();
  // questionRecord.getList();

  const goHome = () => {
    router.push({ path: '/' });
  };

  const openid = userStore.openid;
  if (!openid) {
    console.log('openid为空');
    // 跳转到首页
    // goHome();
  } else {
    (async () => {
      var c = new window.cloud.Cloud({
        // appid: 'wxd4832b465764a784',
        identityless: true, // 表示是未登录模式
        resourceAppid: 'wx50375099287064d3',
        resourceEnv: 'env-prod-7geqkmur35ee26ed',
      });

      // 初始化云开发
      await c.init();

      const res = await c.database().collection('questions').where({ openid }).orderBy('createTime', 'desc').get();
      console.log('questionRecord.res', res);
      if ('collection.get:ok' == res.errMsg && res.data.length) {
        questionRecord.list = res.data;
      }
    })();
  }

  const answerRecord = useAnswerRecord();

  const detail = (itme: IQuesitonRecord) => {
    console.log('itme', itme);
    answerRecord.questionRecord = itme;

    router.push({ path: `/answer-detail` });
  };
</script>
<style lang="scss" scoped>
  .container {
    background-color: #d0d1ff;
    height: 100%;
    min-height: 100vh;
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
    padding: 72px 72px;
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
    line-height: 44px;
    font-weight: bold;
  }

  .content-area-cell-title-active {
    color: #0053ff;
  }

  .content-area-cell-desc {
    margin-top: 8px;
    font-size: 28px;
    line-height: 36px;
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
