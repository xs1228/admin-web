import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./modules";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes],
  // 切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
