import { defineStore } from 'pinia';
import { IQuestion } from '../api/question';

export const useCheckQuestion = defineStore('checkQuestion', {
  state: () => ({
    questions: {} as IQuestion[],
    answer: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  }),
  getters: {},
  actions: {},
});
