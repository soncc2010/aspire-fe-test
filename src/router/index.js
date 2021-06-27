import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/cards",
    name: "Cards",
    component: () => import("../views/Cards/index.vue"),
  },
  {
    path: "/payments",
    name: "Payments",
    component: () => import("../views/Payments/index.vue"),
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../views/Setting/index.vue"),
  },
  {
    path: "/credit",
    name: "Credit",
    component: () => import("../views/Credit/index.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("../views/Errors/404.vue"),
  },
  {
    path: "/401",
    name: "Unauthorized",
    component: () => import("../views/Errors/401.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: import("../views/Errors/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "is-active",
  linkExactActiveClass: "exact-active",
});

export default router;
