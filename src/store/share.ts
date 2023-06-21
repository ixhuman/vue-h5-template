import { defineStore } from 'pinia';

export const useShare = defineStore('share', {
  state: () => ({
    prizeContent: '', // 奖励内容
    questionId: '', // 出题id
  }),

  getters: {
    // 获取分享二维码URL
    getShareUrl(state) {
      return 'http://' + window.location.host + '/answer-question?qid=' + state.questionId;
    },
  },

  actions: {},
});
