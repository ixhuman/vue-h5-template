import { defineStore } from 'pinia';
import { IQuesitonRecord, getQuesitonRecords } from '../api/questionRecord';

export const useQuestionRecords = defineStore('questionRecord', {
  state: () => ({
    list: [] as IQuesitonRecord[],
  }),

  getters: {},

  actions: {
    getList() {
      const res = getQuesitonRecords();
      this.list = res;
      return res;
    },
    getOne() {},
  },
});
