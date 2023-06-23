import { defineStore } from 'pinia';

export const useUser = defineStore('user', {
  state: () => ({
    unionid: '',
    avatarUrl: '',
    nickname: '',
  }),

  getters: {},

  actions: {},
});
