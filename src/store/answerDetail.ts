import { defineStore } from 'pinia';
import { IAnswerRecord } from '../api/answerRecord';
import { IQuesitonRecord } from '../api/questionRecord';

// 答题详情
export const useAnswerDetail = defineStore('answerDetail', {
  state: () => ({
    questionRecord: {} as IQuesitonRecord, // 出题记录（单条）
    list: [] as IAnswerRecord[],
  }),

  getters: {
    // 获取出题id
    getQuestionId(state) {
      return state.questionRecord._id;
    },
    // 获取出题奖励
    getQuestionReward(state) {
      return state.questionRecord.prizeContent;
    },
  },

  actions: {
    // 分数
    getScore(result: number[]) {
      if (result.length === 0) {
        return 0;
      }
      return result.reduce((prev: number, curr: number) => prev + curr) * 10;
    },
  },
});
