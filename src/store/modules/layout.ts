//src/store/user.ts
import { defineStore } from "pinia";

// 第一个参数是应用程序中 store 的唯一 id
export const LayoutStore = defineStore("LayoutStore", {
  state: () => {
    return {
      isCollapse: false,
    };
  },
});
