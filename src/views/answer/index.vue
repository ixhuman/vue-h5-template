<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-hd">
        <div class="content-area-hd-user-avatar">
          <img v-if="answerQuestion.avatarUrl" :src="answerQuestion.avatarUrl" mode="widthFix" />
          <img v-else src="../../assets/avatars/4.jpg" mode="widthFix" />
        </div>
        <div class="content-area-hd-tips">
          <div class="content-area-hd-tip">10道题你能答对多少？</div>
          <div class="content-area-hd-tip">默契好友才能获得答题奖励哦</div>
        </div>
      </div>
      <div class="content-area-bd">
        <div class="content-area-cell">
          <div>答题奖励</div>
          <div style="color: #0053ff">{{ answerQuestion.prizeContent }}</div>
        </div>
        <div class="content-area-cell">
          <div>至少答对</div>
          <div style="color: #0053ff">{{ answerQuestion.passScore }}题</div>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main" @click="startAnswering">开始答题</div>
      </div>
    </div>
  </div>
  <van-dialog />
</template>
<script lang="ts" setup>
  import router from '/@/router';
  import { useAnswerQuestion } from '/@/store/answerQuestion';
  import { showDialog } from 'vant';

  const answerQuestion = useAnswerQuestion();

  const route = useRoute();
  console.log('query.qid', route.query.qid);

  var questionId = route.query.qid;

  const startAnswering = () => {
    router.push({ path: '/doing-question' });
  };

  const goHome = () => {
    router.push({ path: '/' });
  };

  // 出题ID为空跳转到首页
  if (!questionId) {
    // goHome();
    showDialog({
      title: '提示',
      message: '下次来早点，该题已结束',
    }).then(() => {
      goHome();
    });
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

      const res = await c.callFunction({ name: 'userQuestion', data: { qid: questionId } });
      console.log('userQuestion.res', res);
      // alert(`${JSON.stringify(res)}`);
      if (res.result.success) {
        answerQuestion.$patch({
          unionid: res.result.data.unionid,
          avatarUrl: res.result.data.avatarUrl ? res.result.data.avatarUrl : '',
          nickname: res.result.data.nickname ? res.result.data.nickname : '',
          prizeContent: res.result.data.prizeContent,
          passScore: res.result.data.passScore,
          list: res.result.data.questions,
          questionId: res.result.data._id,
        });
      }
    })();
  }
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
    margin-top: 48px;
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

  .content-area-hd-tip:not(:first-child) {
    margin-top: 8px;
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
</style>
