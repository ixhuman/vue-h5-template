import { defineStore } from 'pinia';
import { IQuesitonRecord, getQuesitonRecords } from '../api/questionRecord';

export const useQuestionRecord = defineStore('questionRecord', {
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
  },
});
