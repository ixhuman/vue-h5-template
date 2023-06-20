<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-hd">
        <div class="content-area-hd-no">第 {{ makeQuestion.currentNo }} / {{ makeQuestion.total }} 题</div>
        <div class="content-area-hd-tip">请点击你认可的选项</div>
      </div>
      <div class="content-area-bd">
        <div class="content-area-cell content-area-cell-title">
          <div class="content-area-cell-tag">问</div>
          <div class="content-area-cell-text">{{ makeQuestion.currentQuestion.title }}</div>
        </div>
        <div
          class="content-area-cell"
          v-for="(item, index) of makeQuestion.currentQuestion.items"
          :class="item.active ? 'content-area-cell-active' : ''"
          :key="item.text"
          @click="setAnswer(makeQuestion.currentQuestion.items, item)"
        >
          <div class="content-area-cell-tag">{{ String.fromCharCode(index + 65) }}</div>
          <div class="content-area-cell-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <!-- <wx-open-launch-weapp
      id="launch-btn"
      username="gh_9f3febb628c2"
      path="/pages/h5/login"
      @launch="onLaunch"
      @error="onError"
    >
      <div is="vue:script" type="text/wxtag-template">
        <button
          style="
            width: 200px;
            height: 45px;
            text-align: center;
            font-size: 17px;
            display: block;
            margin: 0 auto;
            padding: 8px 24px;
            border: none;
            border-radius: 4px;
            background-color: #07c160;
            color: #fff;
          "
          >打开小程序10</button
        >
      </div>
    </wx-open-launch-weapp> -->
    <div class="operation-area">
      <div class="operation-area-btn">
        <div v-if="makeQuestion.currentNo > 1" class="operation-area-btn-main" @click="toPrevQuestion">上一题</div>
        <div class="operation-area-btn-main" @click="changeQuestion">换一道题</div>
        <div class="operation-area-btn-main" @click="editQuestion">修改本题</div>
      </div>
    </div>
  </div>
  <van-dialog v-model:show="show" title="你还没有登录" :show-confirm-button="false" :closeOnClickOverlay="true">
    <!-- <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" /> -->
    <div class="van-dialog-weapp">
      <wx-open-launch-weapp
        id="launch-btn"
        appid="wx50375099287064d3"
        username="gh_9f3febb628c2"
        path="/pages/h5/login"
        env-version="develop"
        @launch="onLaunch"
        @error="onError"
      >
        <template is="vue:script" type="text/wxtag-template">
          <button
            style="
              width: 200px;
              height: 45px;
              text-align: center;
              font-size: 17px;
              display: block;
              margin: 0 auto;
              padding: 8px 24px;
              border: none;
              border-radius: 4px;
              background-color: #07c160;
              color: #fff;
            "
            >点击登陆</button
          >
        </template>
      </wx-open-launch-weapp>
    </div>
  </van-dialog>
  <!-- <van-popup v-model:show="show" round :style="{ padding: '32px 64px 64px' }" >
    <van-row justify="center" gutter="20" style="margin-bottom: 32px;">
      <van-col span="12">你还没有登录</van-col>  
    </van-row>
    <wx-open-launch-weapp
      id="launch-btn"
      username="gh_9f3febb628c2"
      path="/pages/h5/login"
      @launch="onLaunch"
      @error="onError"
    >
    <div is="vue:script" type="text/wxtag-template">
        <button
          style="
            width: 200px;
            height: 45px;
            text-align: center;
            font-size: 17px;
            display: block;
            margin: 0 auto;
            padding: 8px 24px;
            border: none;
            border-radius: 4px;
            background-color: #07c160;
            color: #fff;
          "
          >点击登陆</button
        >
      </div>
    </wx-open-launch-weapp>
  </van-popup> -->
</template>
<script setup>
  import router from '/@/router';
  import { useMakeQuestion } from '/@/store/makeQuestion';
  import { useUser } from '/@/store/user';

  const makeQuestion = useMakeQuestion();
  const userStore = useUser();

  const show = ref(true);

  // 初始化(生成10道题）
  makeQuestion.isInit || makeQuestion.getQuestions();

  const bindEvents = () => {
    var btn = document.getElementById('launch-btn');
    btn.addEventListener('launch', function () {
      console.log('开放标签 success');
    });

    btn.addEventListener('error', function (e) {
      console.log('开放标签 fail', e.detail);
    });
  };

  const wxConfig = () => {
    wx.config({
      debug: true, // 调试时可开启
      appId: 'wx50375099287064d3', // <!-- replace -->
      timestamp: 0, // 必填，填任意数字即可
      nonceStr: 'nonceStr', // 必填，填任意非空字符串即可
      signature: 'signature', // 必填，填任意非空字符串即可
      jsApiList: ['wx-open-subscribe', 'wx-open-launch-app'], // 必填，需要使用的JS接口列表
      openTagList: ['wx-open-subscribe', 'wx-open-launch-app'], // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
    });
    wx.ready(function () {
      console.log('config ready');
      bindEvents();
    });
    wx.error(function () {
      console.log('config error');
    });
  };

  onMounted(() => {
    wxConfig();
  });

  // onMounted(() => {
  //   var btn = document.getElementById('launch-btn');
  //   btn.addEventListener('launch', function () {
  //     console.log('开放标签 success');
  //   });

  //   btn.addEventListener('error', function (e) {
  //     console.log('开放标签 fail', e.detail);
  //   });
  // });

  // () => {
  // var launchBtn: HTMLElement = document.getElementById('launch-btn')
  // launchBtn.addEventListener('ready', function () {
  //   console.log('开放标签 ready')
  // })
  // launchBtn.addEventListener('launch', function () {
  //   console.log('开放标签 success')
  // })
  // launchBtn.addEventListener('error', function (e) {
  //   console.log('开放标签 fail', e.detail)
  // })
  // };

  const onLaunch = (e) => {
    console.log('开放标签 success', e);
  };

  const onError = (e) => {
    console.log('开放标签 fail', e.detail);
  };

  // 保存数据
  const saveMakeQuestion = async () => {
    var c = new window.cloud.Cloud({
      identityless: true, // 表示是未登录模式
      resourceAppid: 'wx50375099287064d3',
      resourceEnv: 'env-prod-7geqkmur35ee26ed',
    });

    await c.init();

    const res = await c
      .database()
      .collection('questions')
      .add({
        data: {
          openid: userStore.openid,
          questions: makeQuestion.questions,
          createTime: c.database().serverDate(),
        },
      });
    console.log('questions.res', res);
    if (res.errMsg == 'collection.add:ok') {
      // 保存到本地
      makeQuestion.questionId = res._id;

      // 设置奖励（跳转下一个页面）
      setReward();
    }
  };

  // 设置答案并且设置下一题
  const setAnswer = (items, item) => {
    // 1.重置其它选项
    items.forEach((element) => {
      element.active = false;
    });

    // 2.设置当前选项为正确答案
    item.active = true;

    show.value = true;

    // 3.下一题 | 10题做完跳转
    // if (makeQuestion.currentNo >= makeQuestion.total) {
    //   if (!userStore.openid) {
    //     // 公众授权登陆
    //     // 跳转到小程序
    //     // 返回H5获取用户信息
    //     // 提交题目
    //   } else {
    //     saveMakeQuestion();
    //   }
    // } else {
    //   setTimeout(() => {
    //     makeQuestion.index++;
    //   }, 200);
    // }
  };

  // 上一题
  const toPrevQuestion = () => {
    if (makeQuestion.currentNo <= 1) {
      return;
    } else {
      makeQuestion.index--;
    }
  };

  // 换一题 | 题库
  const changeQuestion = () => {
    router.push({ path: '/question-bank' });
  };

  // 修改题目
  const editQuestion = () => {
    router.push({ path: '/edit-question' });
  };

  // 设置奖励
  const setReward = () => {
    router.push({ path: '/set-reward' });
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
    // line-height: 1.4;
    font-weight: bold;
    background-color: #000000;
    color: #fff;
    border-radius: 8px;
    padding: 4px 12px;
    width: 48px;
    height: 48px;
    text-align: center;
    box-sizing: border-box;
  }

  .content-area-cell-text {
    display: flex;
    margin-left: 16px;
    font-size: 28px;
    font-weight: bold;
    color: #000000;
    padding: 4px 2px;
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

  .van-dialog-weapp {
    text-align: center;
    padding: 32px 48px 64px;
  }
</style>
