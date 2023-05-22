import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import path from "path";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  resolve: {
    alias: {
      // 配置路径别名
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          //配置less全局变量都可用
          hack: `true; @import (reference) "${path.resolve(
            __dirname,
            "src/assets/styles/global.less"
          )}";`, // src/assets/global.less 是你需要全局变量 （你定义的定义的方法 和 变量等）
        },
        javascriptEnabled: true,
      },
    },
  },
});
