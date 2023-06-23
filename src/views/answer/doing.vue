<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-hd">
        <div class="content-area-hd-no">第 {{ answerQuestion.currentNo }} / {{ answerQuestion.total }} 题</div>
        <div class="content-area-hd-tip">请点击你认可的选项</div>
      </div>
      <div class="content-area-bd">
        <div class="content-area-cell content-area-cell-title">
          <div class="content-area-cell-tag">问</div>
          <div class="content-area-cell-text">{{ answerQuestion.currentQuestion.title }}</div>
        </div>
        <div
          class="content-area-cell"
          v-for="(item, index) of answerQuestion.currentQuestion.items"
          :key="item.text"
          :class="index == answerQuestion.answer[answerQuestion.index] ? 'content-area-cell-active' : ''"
          @click="nextQuestion(item, index)"
        >
          <div class="content-area-cell-tag">{{ String.fromCharCode(index + 65) }}</div>
          <div class="content-area-cell-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main" @click="prevQuestion">重答上一题</div>
      </div>
    </div>
  </div>
  <van-dialog />
</template>
<script lang="ts" setup>
  import { showDialog } from 'vant';
  import router from '/@/router';
  import { useAnswerQuestion } from '/@/store/answerQuestion';
  import { useUser } from '/@/store/user';

  const _window = window as any;

  const answerQuestion = useAnswerQuestion();
  const userStore = useUser();

  const route = useRoute();
  var accessToken = route.query.access_token;
  var refreshToken = route.query.refresh_token;

  const doLogin = async () => {
    interface obj {
      [idx: string]: any;
    }

    let checkLoginOptions: obj = {
      provider: 'OfficialAccount',
      appid: 'wxd4832b465764a784',
    };

    if (route.query.oauthredirect === '1') {
      checkLoginOptions.accessToken = accessToken;
      checkLoginOptions.refreshToken = refreshToken;
    }

    const result = await window.cloud.checkLogin(checkLoginOptions);
    console.log(`checkLogin.result: `, result);

    if (result.errCode === 0 && result.loggedIn) {
      // 登录模式
      var c = new window.cloud.Cloud({
        appid: 'wxd4832b465764a784',
        // identityless: true, // 表示是未登录模式
        resourceAppid: 'wx50375099287064d3',
        resourceEnv: 'env-prod-7geqkmur35ee26ed',
      });

      // 初始化云开发
      await c.init();
      _window.c = c;

      // 获取用户信息
      const res = await c.callFunction({ name: 'createOrFirstUser' });
      console.log('createOrFirstUser.res', res);
      // alert(`${JSON.stringify(res)}`);
      if (res.result.success) {
        userStore.$patch({
          unionid: res.result.data.unionid,
          avatarUrl: res.result.data.avatarUrl ? res.result.data.avatarUrl : '',
          nickname: res.result.data.nickname ? res.result.data.nickname : '',
        });

        if (res.result.data.avatarUrl) {
          // 跳转小程序
          location.href = 'jump-mp.html';
        }
      }
    } else {
      window.cloud.startLogin({
        provider: 'OfficialAccount',
        appid: 'wxd4832b465764a784',
        scope: 'snsapi_base',
        redirectUri: 'https://env-prod-7geqkmur35ee26ed-1305852262.tcloudbaseapp.com/#/doing-question',
      });
    }
  };

  // 获取个人信息
  const findOneUser = async () => {
    if (!_window.c) {
      var c = new window.cloud.Cloud({
        appid: 'wxd4832b465764a784',
        // identityless: true, // 表示是未登录模式
        resourceAppid: 'wx50375099287064d3',
        resourceEnv: 'env-prod-7geqkmur35ee26ed',
      });

      await c.init();
    } else {
      c = _window.c;
    }

    const res = await c.database().collection('users').where({ unionid: userStore.unionid }).get();
    console.log('uses.res', res);
    if ('collection.get:ok' == res.errMsg && res.data.length) {
      userStore.$patch({
        unionid: res.data.unionid,
        avatarUrl: res.data.avatarUrl,
        nickname: res.data.nickname,
      });
    }
  };

  // 保存数据
  const saveAnswerQuestion = async () => {
    if (!_window.c) {
      var c = new window.cloud.Cloud({
        appid: 'wxd4832b465764a784',
        // identityless: true, // 表示是未登录模式
        resourceAppid: 'wx50375099287064d3',
        resourceEnv: 'env-prod-7geqkmur35ee26ed',
      });

      await c.init();
    } else {
      c = _window.c;
    }

    const res = await c.callFunction({
      name: 'answerQuestion',
      data: {
        qid: answerQuestion.questionId,
        result: answerQuestion.result,
        answer: answerQuestion.answer,
        isPass: answerQuestion.isPass,
        isRedeem: answerQuestion.isRedeem,
      },
    });
    console.log('answerQuestion.res', res);

    // 答完题跳转到结果页面
    answerResult();
  };

  // 重答上一题
  const prevQuestion = () => {
    if (answerQuestion.currentNo <= 1) {
      return;
    } else {
      setTimeout(() => {
        answerQuestion.index--;
      }, 200);
    }
  };

  // 下一题
  const nextQuestion = (
    item: {
      text: string;
      active: boolean;
    },
    index: number,
  ) => {
    // 答案
    answerQuestion.answer[answerQuestion.index] = index;
    // 答题结果
    answerQuestion.result[answerQuestion.index] = item.active ? 1 : 0;

    if (answerQuestion.currentNo >= answerQuestion.total) {
      findOneUser();
      if (!userStore.unionid) {
        // 跳转授权
        showDialog({
          message: '你还没有登录',
          confirmButtonText: '点击登录',
          closeOnClickOverlay: true,
        }).then((res) => {
          console.log(res);
          if ('confirm' == res) {
            doLogin();
          }
        });
      } else if (!userStore.avatarUrl) {
        // 跳转到小程序
        showDialog({
          message: '你还没有登录',
          confirmButtonText: '点击登录',
          closeOnClickOverlay: true,
        }).then((res) => {
          console.log(res);
          if ('confirm' == res) {
            location.href = 'jump-mp.html';
          }
        });
      } else {
        // 计算结果
        answerQuestion.getResult();
        // 保存结果
        saveAnswerQuestion();
      }
    } else {
      // 下一道题
      setTimeout(() => {
        answerQuestion.index++;
      }, 200);
    }
  };

  const answerResult = () => {
    router.push({ path: '/answer-result' });
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .content-area-hd-no {
    font-size: 36px;
    line-height: 48px;
    font-weight: bold;
  }

  .content-area-hd-tip {
    font-size: 28px;
    line-height: 42px;
  }

  .content-area-bd {
    margin-top: 48px;
  }

  .content-area-cell {
    border-radius: 16px;
    background-color: #fff;
    border: 4px solid #000000;
    padding: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
  }

  .content-area-cell:not(:first-child) {
    margin-top: 40px;
  }

  .content-area-cell-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;
    background-color: #000000;
    color: #fff;
    border-radius: 8px;
    padding: 4px;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
  }

  .content-area-cell-text {
    display: flex;
    margin-left: 16px;
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;
    color: #000000;
    padding: 6px 0;
    flex: 1;
  }

  .content-area-cell-title {
    background-color: #000000;
  }

  .content-area-cell-title .content-area-cell-tag {
    background-color: #fff;
    color: #000000;
  }

  .content-area-cell-title .content-area-cell-text {
    color: #fff;
  }

  .content-area-cell-active {
    background-color: #f8d448;
  }

  .operation-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 48px;
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
</style>
