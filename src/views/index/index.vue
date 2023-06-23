<template>
  <div class="container">
    <div class="head-area">
      <div class="head-area-img">
        <img class="head-area-img-logo" src="../../assets/logo.png" mode="widthFix" />
        <img class="head-area-img-banner" src="../../assets/banner.png" mode="widthFix" />
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main" @click="startMakeQuestion">开始出题</div>
      </div>
      <div class="operation-area-btn-sub">
        <div class="operation-area-btn-sub-main" @click="myQuestionRecord">我的出题记录</div>
        <div class="operation-area-btn-sub-main" @click="answerRecord">答题/获奖记录</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import router from '/@/router';
  import { useUser } from '/@/store/user';

  const userStore = useUser();

  var urlSearch = new URLSearchParams(location.search);
  var accessToken = urlSearch.get('access_token');
  var refreshToken = urlSearch.get('refresh_token');

  (async () => {
    interface obj {
      [idx: string]: any;
    }

    let checkLoginOptions: obj = {
      provider: 'OfficialAccount',
      appid: 'wxd4832b465764a784',
    };

    if (urlSearch.get('oauthredirect') === '1') {
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
      }
    } else {
      window.cloud.startLogin({
        provider: 'OfficialAccount',
        appid: 'wxd4832b465764a784',
        scope: 'snsapi_base',
        redirectUri: 'https://env-prod-7geqkmur35ee26ed-1305852262.tcloudbaseapp.com/index',
      });
    }
  })();

  const startMakeQuestion = () => {
    alert(`unionid: ${userStore.unionid}`);
    router.push({ path: 'make-question' });
  };

  const myQuestionRecord = () => {
    if (!userStore.unionid) {
      console.log('openid为空');
      return;
    }
    router.push({ path: 'question-record' });
  };

  const answerRecord = () => {
    if (!userStore.unionid) {
      console.log('openid为空');
      return;
    }
    router.push({ path: 'answer-record' });
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

  .head-area {
    flex: 3;
    width: 100%;
    position: relative;
  }

  .head-area-img {
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
      width: 70%;
    }
  }

  .operation-area {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
