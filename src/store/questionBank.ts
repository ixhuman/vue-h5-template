import { defineStore } from 'pinia';
import { IQuestion, getQuestions } from '../api/question';

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

export const useQuestionBank = defineStore('questionBank', {
  state: () => ({
    all: [] as IQuestion[],
    type: 'youqulinghun',
    types: types,
  }),
  getters: {
    // 是否初始化
    isInit(state) {
      return state.all.length > 0 ? true : false;
    },
    getAllbyType(state) {
      const result = [] as IQuestion[];

      state.all.forEach((element) => {
        if (element.type == state.type) {
          result.push(element);
        }
      });

      return result;
    },
  },
  actions: {
    // 获取题库
    getAll() {
      const ques = getQuestions();
      this.all = ques;
      return ques;
    },
    updateType(type: string) {
      this.type = type;
    },
  },
});
