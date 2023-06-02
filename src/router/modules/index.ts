import { RouteRecordRaw } from "vue-router";
import loginRouter from "./login";
import homeRouter from "./home";

const routes: RouteRecordRaw[] = [
  ...loginRouter,
  ...homeRouter,
  {
    path: "/home1",
    redirect: "/home1/index",
    component: () => import("@/views/layout/index.vue"),
    meta: {
      title: "哈哈哈",
    },
    children: [
      {
        path: "/home1/index",
        meta: {
          title: "测试1",
        },
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/home1/index2",
        meta: {
          title: "测试2",
        },
        component: () => import("@/views/home/index.vue"),
        children: [
          {
            path: "/home1/index2/index2-1",
            meta: {
              title: "测试2-1",
            },
            component: () => import("@/views/home/index.vue"),
          },
        ],
      },
      {
        path: "/home1/index3",
        meta: {
          title: "测试3",
        },
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
  {
    path: "/home1",
    redirect: "/home/text",
    component: () => import("@/views/layout/index.vue"),
    meta: {
      title: "呵呵呵",
    },
    children: [
      {
        path: "/home1/text",
        meta: {
          title: "测试1",
        },
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/home1/index2",
        meta: {
          title: "测试2",
        },
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/home1/index3",
        meta: {
          title: "测试3",
        },
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
];

export default routes;
