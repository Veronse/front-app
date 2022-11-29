import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView";
import HomePage from "@/views/HomePage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/LoginView.vue"),
  },
  {
    path: "/application",
    name: "application",
    component: () =>
      import("../views/PracticeForm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
