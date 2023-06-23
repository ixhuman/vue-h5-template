import { defineStore } from 'pinia';
import { IQuestion } from '../api/question';

export const useAnswerQuestion = defineStore('answerQuestion', {
  state: () => ({
    unionid: '', // 出题人id
    avatarUrl: '', // 出题人头像
    nickname: '', // 出题人昵称
    questionId: '', // 出题id
    prizeContent: '组一个CP',
    passScore: 8,
    answer: [] as number[],
    result: [] as number[],
    total: 10,
    index: 0,
    list: [
      {
        type: 'richangliaojie',
        title: '我会如何处理银行卡里的余额?',
        items: [
          { text: '花掉', active: false },
          { text: '投资', active: true },
        ],
        index: 165,
      },
      {
        type: 'aiqing',
        title: '和对象吵架我会？',
        items: [
          { text: '主动认错', active: false },
          { text: '等待对方认错', active: true },
        ],
        index: 77,
      },
      {
        type: 'jiaruruguo',
        title: '如果有时光机的话，我想去未来还是回到过去？',
        items: [
          { text: '未来', active: false },
          { text: '过去', active: true },
        ],
        index: 15,
      },
      {
        type: 'aiqing',
        title: '我会选择和哪种恋爱？',
        items: [
          { text: '喜欢的人', active: false },
          { text: '被人喜欢', active: true },
        ],
        index: 106,
      },
      {
        type: 'jiaruruguo',
        title: '去孤岛只能带一件东西,我会选择?',
        items: [
          { text: '收音机', active: false },
          { text: '纸和笔', active: true },
          { text: '很多很多酒', active: false },
          { text: '不断电的相机', active: false },
        ],
        index: 162,
      },
      {
        type: 'guanyuwo',
        title: '我作业写完了吗？',
        items: [
          { text: '写完啦', active: false },
          { text: '救命还没', active: true },
        ],
        index: 234,
      },
      {
        type: 'xingge',
        title: '我获得幸福的方式是？',
        items: [
          { text: '追寻', active: false },
          { text: '等待', active: true },
        ],
        index: 109,
      },
      {
        type: 'guanyuwo',
        title: '年夜饭,我更擅长?',
        items: [
          { text: '做饭', active: false },
          { text: '吃饭', active: true },
        ],
        index: 262,
      },
      {
        type: 'jiaruruguo',
        title: '假如给我一次重生的机会，我更想拥有?',
        items: [
          { text: '逆天的智商', active: false },
          { text: '爆表的颜值', active: true },
          { text: '无尽的财富', active: false },
          { text: '至高的权利', active: false },
        ],
        index: 30,
      },
      {
        type: 'guanyuwo',
        title: '如果疫情结束,明年春节我希望?',
        items: [
          { text: '旅游玩耍', active: true },
          { text: '回家吃团圆饭', active: false },
        ],
        index: 273,
      },
    ] as IQuestion[],
    isPass: false,
    isRedeem: false,
  }),

  getters: {
    // 当前第几题
    currentNo(state) {
      return state.index + 1;
    },
    // 当前题
    currentQuestion(state) {
      return state.list[state.index];
    },
    // 是否初始化
    isInit(state) {
      return state.list.length > 0 ? true : false;
    },
    getCorrectNumber(state) {
      if (state.result.length === 0) {
        return 0;
      }
      return state.result.reduce((prev, curr) => prev + curr);
    },
    // 分数
    getScore(state) {
      if (state.result.length === 0) {
        return 0;
      }
      return state.result.reduce((prev, curr) => prev + curr) * 10;
    },
  },

  actions: {
    getResult() {
      const score = this.result.reduce((prev, curr) => prev + curr);
      if (this.passScore <= score) {
        this.isPass = true;
      } else {
        this.isPass = false;
      }
    },
  },

  persist: true,
});
