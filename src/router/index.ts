import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Main.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/home/Home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes] as RouteRecordRaw[],
});

export default router;
