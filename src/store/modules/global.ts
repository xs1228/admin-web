import { defineStore } from "pinia";

// 第一个参数是应用程序中 store 的唯一 id
export const GlobalStore = defineStore("GlobalStore", {
  state: () => {
    return {
      // Token
      token: "",
      // userInfo
      userInfo: "",
    };
  },
  getters: {},
  actions: {
    // set token
    setToken(token: string) {
      this.token = token;
    },
    // set userInfo
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo;
    },
  },
  persist: {
    // 开启持久化
    enabled: true,
    // 选择存储方式和内容
    strategies: [{ storage: localStorage, paths: ["token"] }],
  },
});
