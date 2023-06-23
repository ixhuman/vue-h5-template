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
    <div class="operation-area">
      <div class="operation-area-btn">
        <div v-if="makeQuestion.currentNo > 1" class="operation-area-btn-main" @click="toPrevQuestion">上一题</div>
        <div class="operation-area-btn-main" @click="changeQuestion">换一道题</div>
        <div class="operation-area-btn-main" @click="editQuestion">修改本题</div>
      </div>
    </div>
  </div>
  <van-dialog />
</template>
<script setup>
  import { showDialog } from 'vant';
  import router from '/@/router';
  import { useMakeQuestion } from '/@/store/makeQuestion';
  import { useUser } from '/@/store/user';

  const makeQuestion = useMakeQuestion();
  const userStore = useUser();

  // 初始化(生成10道题）
  makeQuestion.isInit || makeQuestion.getQuestions();

  // 获取个人信息
  const findOneUser = async () => {
    var c = new window.cloud.Cloud({
      identityless: true, // 表示是未登录模式
      resourceAppid: 'wx50375099287064d3',
      resourceEnv: 'env-prod-7geqkmur35ee26ed',
    });

    await c.init();

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
          unionid: userStore.unionid,
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

    // 3.下一题 | 10题做完跳转
    if (makeQuestion.currentNo >= makeQuestion.total) {
      findOneUser();
      if (!userStore.unionid) {
        console.log('unionid为空');
      } else if (!userStore.avatarUrl) {
        // 跳转到小程序
        // window.open("jump-mp.html")
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
        // 提交题目
        saveMakeQuestion();
      }
    } else {
      setTimeout(() => {
        makeQuestion.index++;
      }, 200);
    }
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
