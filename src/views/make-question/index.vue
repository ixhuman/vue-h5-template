<template>
  <div class="container">
    <div class="content-area">
      <div class="content-area-hd">
        <div class="content-area-hd-no">第 {{ index + 1 }} / {{ questionList.length }} 题</div>
        <div class="content-area-hd-tip">请点击你认可的选项</div>
      </div>
      <div class="content-area-bd">
        <div class="content-area-cell content-area-cell-title">
          <div class="content-area-cell-tag">问</div>
          <div class="content-area-cell-text">{{ state.currentQuestion.title }}</div>
        </div>
        <div
          class="content-area-cell"
          v-for="(item, index) of state.currentQuestion.items"
          :class="item.active ? 'content-area-cell-active' : ''"
          :key="item.text"
          @click="setAnswer(state.currentQuestion.items, item)"
        >
          <div class="content-area-cell-tag">{{ String.fromCharCode(index + 65) }}</div>
          <div class="content-area-cell-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-btn">
        <div v-if="index != 0" class="operation-area-btn-main" @click="toPrevQuestion">上一题</div>
        <div class="operation-area-btn-main" @click="changeQuestion">换一道题</div>
        <div class="operation-area-btn-main" @click="editQuestion">修改本题</div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ques } from './libs';
  import router from '/@/router';

  // 获取答题库中 index 数组
  const getIndexs = (libs, num) => {
    const len = libs.length;
    const arr = [];

    for (let i = 0; i < len; i++) {
      arr.push(libs[i].index);
    }

    const result = [];

    while (result.length < num) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const randomValue = arr.splice(randomIndex, 1)[0];
      result.push(randomValue);
    }

    return result;
  };

  // 获取10题
  const getListQuestion = (libs) => {
    const indexs = getIndexs(libs, 10);
    const result = [];

    libs.forEach((element) => {
      if (indexs.indexOf(element.index) > -1) {
        result.push(element);
      }
    });

    return result;
  };

  const questionList = getListQuestion(ques);
  console.log('questionList', questionList);

  let index = 0; //题目序号 初始化为0

  //设置 当前题目 响应式对象
  const state = reactive({
    currentQuestion: questionList[index],
  });

  // 根据题目序号，设置当前题目
  const setCurrentQuestion = (index) => {
    // 超出范围，直接返回
    if (index < 0) {
      return;
    } else if (index >= questionList.length) {
      console.log('10题做完');
      setReward();
      return;
    }
    state.currentQuestion = questionList[index];
  };

  // 上一题
  const toPrevQuestion = () => {
    setCurrentQuestion(--index);
  };

  // 下一题
  const toNextQuestion = () => {
    setCurrentQuestion(++index);
  };

  // 换一题
  const changeQuestion = () => {
    // 1.取一道新题
    // const oneQuestion = getOneQuestion(ques, questionList);
    // console.log('oneQuestion', oneQuestion);
    // 2.替换 questionList 中下标为 index 的题目对象
    // questionList.splice(index, 1, oneQuestion);
    // console.log('questionList', questionList);
    // 3.设置当前题目 setCurrentQuestion(index)
    // setCurrentQuestion(index);
    router.push({ path: '/question-lib' });
  };

  //设置答案并且设置下一题
  const setAnswer = (list, item) => {
    //1.重置其它选项
    list.forEach((it) => {
      it.active = false;
    });
    //2.设置当前选项为正确答案
    item.active = true;
    //3.下一题
    setTimeout(() => {
      toNextQuestion();
    }, 500);
    console.log(state.currentQuestion, questionList);
  };

  // const getOneQuestion = (libs, list) => {
  //   const listIndexs = [];

  //   list.forEach((element) => {
  //     listIndexs.push(element.index);
  //   });

  //   libs.forEach((element, key) => {
  //     if (listIndexs.indexOf(element.index) > -1) {
  //       libs.splice(key, 1);
  //     }
  //   });

  //   const libsIndexs = getIndexs(libs, 1);

  //   const result = libs.find((element) => {
  //     if (libsIndexs.indexOf(element.index) > -1) {
  //       console.log('element', element);
  //       return element;
  //     }
  //   });

  //   return result;
  // };

  const editQuestion = () => {
    router.push({ path: '/edit-question' });
  };

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
</style>
