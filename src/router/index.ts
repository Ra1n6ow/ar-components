import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/components/container/src/index.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/chooseIcon",
        component: () => import("@/views/chooseIcon/index.vue"),
      },
      {
        path: "/chooseArea",
        component: () => import("@/views/chooseArea/index.vue"),
      },
      {
        path: "/trend",
        component: () => import("@/views/trend/index.vue"),
      },
      {
        path: "/notification",
        component: () => import("@/views/notification/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
