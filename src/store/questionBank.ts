import { defineStore } from 'pinia';
import { IQuestion, getQuestions } from '../api/question';

export const useQuestionBank = defineStore('questionBank', {
  state: () => ({
    all: [] as IQuestion[],
  }),
  getters: {
    getQues(state) {
      console.log('111');
      return state.all;
    },
  },
  actions: {
    getAll() {
      const ques = getQuestions();
      this.all = ques;
      console.log('aaa');
      return ques;
    },
  },
});
