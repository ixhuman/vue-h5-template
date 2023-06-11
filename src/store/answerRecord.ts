import { defineStore } from 'pinia';
import { IAnswerRecord, getAnswerRecords } from '../api/answerRecord';
import { IQuesitonRecord } from '../api/questionRecord';

export const useAnswerRecord = defineStore('answerRecord', {
  state: () => ({
    questionRecord: {} as IQuesitonRecord,
    list: [] as IAnswerRecord[],
  }),
  getters: {},
  actions: {
    getList() {
      const res = getAnswerRecords();
      this.list = res;
      return res;
    },
  },
});
