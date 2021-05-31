import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/404.vue"),
  },
  // todoList案例
  {
    path: "/todoList",
    name: "todoList",
    component: () => import("../views/todoList/index.vue"),
  },
  // ts学习
  {
    path: "/ts",
    name: "ts",
    component: () => import("../views/ts/index.vue"),
  },
  // 贪吃蛇
  {
    path: "/snake",
    name: "snake",
    component: () => import("../views/ts/snake/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
