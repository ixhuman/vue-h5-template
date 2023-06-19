import { defineStore } from 'pinia';
import { IQuestion } from '../api/question';
import { useQuestionBank } from './questionBank';

export const useMakeQuestion = defineStore('makeQuestion', {
  state: () => ({
    total: 10, // 题目总数
    index: 0, // 当前题目Index
    questions: [] as IQuestion[], // 题目
    questionId: '', // 出题ID
    prizeContent: '', // 奖励内容
    prizeIndex: 0,
    passScore: 8, // 至少答对
  }),

  getters: {
    // 当前第几题
    currentNo(state) {
      return state.index + 1;
    },
    // 当前题
    currentQuestion(state) {
      return state.questions[state.index];
    },
    // 是否初始化
    isInit(state) {
      return state.questions.length > 0 ? true : false;
    },
    // 是否保存成功
    hasQuestionId(state) {
      return state.questionId ? true : false;
    },
    // 获取分享二维码URL
    getShareUrl(state) {
      return 'http://' + window.location.host + '/answer-question?qid=' + state.questionId;
    },
  },

  actions: {
    // 获取10道题目
    getQuestions(num = 10) {
      const ques = useQuestionBank().getAll();
      const length = ques.length;
      const indexs = [] as number[];

      for (let i = 0; i < length; i++) {
        indexs.push(ques[i].index);
      }

      const result = [] as IQuestion[];

      while (result.length < num) {
        const indexKey = Math.floor(Math.random() * indexs.length);
        const indexVal = indexs.splice(indexKey, 1)[0];
        const que = ques.find((currentValue) => currentValue.index == indexVal);
        if (que) {
          result.push(que);
        }
      }

      //   const randomValue = [] as IQuestion[];

      //   randomIndexs.map((item: number) => {
      //     randomValue.push();
      //   })

      //   ques.forEach((element) => {
      //     if (randomIndexs.indexOf(element.index) > -1) {
      //         randomValue.push(element);
      //     }
      //   });

      this.questions = result;

      return result;
    },
    // 更新一道题 ｜ 替换
    updateQuestion(item: IQuestion) {
      console.log('updateQuestion', item);
      return this.questions.splice(this.index, 1, item);
    },
  },
});
