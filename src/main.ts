import { createApp } from "vue";
import "@/assets/styles/index.scss";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";

import * as ELIcons from "@element-plus/icons-vue";

const app = createApp(App);
// 全局导入plus图标
for (let iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName as keyof typeof ELIcons]);
}

app.use(router);
app.use(pinia);

app.mount("#app");
