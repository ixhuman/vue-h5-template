import { defineStore } from 'pinia';

export const useUser = defineStore('user', {
  state: () => ({
    appid: '',
    unionid: '',
    openid: '',
    avatarUrl: '',
    nickname: '',
  }),

  getters: {},

  actions: {},
});
