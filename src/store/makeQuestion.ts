import { defineStore } from 'pinia';
import { IQuestion } from '../api/question';
import { useQuestionBank } from './questionBank';

export const useMakeQuestion = defineStore('makeQuestion', {
  state: () => ({
    total: 10,
    currentNo: 0,
    list: [] as IQuestion[],
  }),

  getters: {
    // 当前第几题
    getCurrentNo(state) {
      return state.currentNo + 1;
    },
    getQuestionTotal(state) {
      return state.total;
    },
  },

  actions: {
    // 获取10道题目
    getList(num = 10) {
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

      this.list = result;

      return result;
    },
  },
});
