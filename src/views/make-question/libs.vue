<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-hd">
        <div class="content-area-hd-no">题库分类</div>
        <div class="content-area-hd-tags">
          <div
            class="content-area-hd-tag"
            v-for="(item, index) in state.types"
            :class="index == state.type ? 'content-area-hd-tag-active' : ''"
            :key="index"
            @click="($event) => changeType(index)"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="content-area-bd">
        <div
          class="content-area-cell content-area-cell-title"
          v-for="(item, index) in state.typeQuestion"
          :key="index"
          @click="($event) => selectedQuestion(item)"
        >
          <div class="content-area-cell-tag">问</div>
          <div class="content-area-cell-text">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div class="operation-area-btn-main" @click="goBackMakeQuestion">返回出题页面</div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ques } from './libs';
  import router from '/@/router';

  const types = {
    youqulinghun: '有趣灵魂',
    chihewanle: '吃喝玩乐',
    xingge: '性格相关',
    jiaruruguo: '假如如果',
    richangliaojie: '日常了解',
    aiqing: '爱情观念',
    sanguan: '生活三观',
    guanyuwo: '关于我的',
    gongzuo: '工作相关',
  };

  const getQuestions = (libs) => {
    const result = {};

    libs.forEach((element) => {
      if (!result[`${element.type}`]) {
        result[`${element.type}`] = [];
      }

      result[`${element.type}`].push(element);
    });

    return result;
  };

  const questions = getQuestions(ques);
  console.log('getQuestions', types, questions);

  let type = 'youqulinghun'; //题目序号 初始化为0

  const state = reactive({
    type,
    types,
    typeQuestion: questions[type],
  });

  const goBackMakeQuestion = () => {
    router.push({ path: '/make-question' });
  };

  const changeType = (index) => {
    console.log('changeType', index);
    state.type = index;
    state.typeQuestion = questions[index];
  };

  const selectedQuestion = (item) => {
    console.log('selectedQuestion', item);
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
    margin-bottom: 240px;
    height: 100vh;
    overflow: scroll;
  }

  .content-area-hd-no {
    font-size: 36px;
    line-height: 44px;
    font-weight: bold;
  }

  .content-area-hd-tags {
    margin-top: 20px;
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
  }

  .content-area-hd-tag {
    padding: 12px 32px;
    border: 4px solid #000000;
    border-radius: 16px;
    background-color: #fff;
  }

  .content-area-hd-tag-active {
    background-color: #f8d448;
  }

  .content-area-cell {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
  }

  .content-area-bd {
    margin-top: 40px;
  }

  .content-area-cell {
    border-radius: 16px;
    background-color: #fff;
    border: 4px solid #000000;
    padding: 24px 32px;
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
    padding: 6px 12px;
    width: 48px;
    text-align: center;
    box-sizing: border-box;
  }

  .content-area-cell-text {
    display: flex;
    margin-left: 16px;
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;
    color: #000000;
    padding: 6px;
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
