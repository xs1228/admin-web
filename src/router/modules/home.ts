import { RouteRecordRaw } from "vue-router";

const homeRouter: RouteRecordRaw[] = [
  {
    path: "/home",
    redirect: "/home/index",
    component: () => import("@/views/layout/index.vue"),
    meta: {
      title: "首页",
      icon: "House",
    },
    children: [
      {
        path: "/home/index",
        meta: {
          title: "首页",
        },
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
];

export default homeRouter;
