import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import path from "path";

import { resolve } from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const { VITE_API_URL, VITE_OPEN, VITE_PORT, VITE_BASE_URL } = loadEnv(
    mode,
    process.cwd()
  );
  // console.log(VITE_API_URL, VITE_OPEN, VITE_PORT, VITE_BASE_URL);
  return defineConfig({
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
        //define global scss variable
        scss: {
          additionalData: `@import "@/assets/styles/global.scss";`,
        },
      },
    },
    // server config
    server: {
      host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      // port: Number(VITE_PORT), // 设置前端服务启动端口号
      open: VITE_OPEN, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      // https: false,
      // 代理跨域
      proxy: {
        [VITE_BASE_URL]: {
          target: VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};
