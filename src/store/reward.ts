import { defineStore } from 'pinia';

export const useReward = defineStore('reward', {
  state: () => ({
    prizeContent: '', // 奖励内容
    prizeIndex: 0,
    requireCorrectNumber: 8, // 至少答对
  }),

  getters: {},

  actions: {},
});
