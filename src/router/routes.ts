import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: async () => import("../pages/page-main.vue"),
  },
  {
    path: "/location-error",
    name: "Location",
    component: async () => import("../pages/errors/location-error.vue"),
  },
];

export default routes;
