import { RouteRecordRaw } from "vue-router";

const loginRouter: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
    meta: {
      title: "登录",
    },
  },
  {
    path: "/login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/login/index.vue"),
  },
];

export default loginRouter;
