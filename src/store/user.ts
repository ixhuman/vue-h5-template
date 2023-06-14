import { defineStore } from 'pinia';

export const useUser = defineStore('user', {
  state: () => ({
    appid: '',
    unionid: '',
    openid: '',
    avatar: '',
    nickname: '',
  }),

  getters: {},

  actions: {},
});
