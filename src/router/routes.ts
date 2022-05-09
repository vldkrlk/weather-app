import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: async () => import("../pages/page-main.vue"),
  },
  {
    path: "/location",
    name: "ChangeLocation",
    component: async () => import("../pages/ChangeLocation.vue"),
  },
  {
    path: "/location-error",
    name: "Location",
    component: async () => import("../pages/errors/location-error.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "ErrorNotFound",
    component: () => import("../pages/errors/notFound-error.vue"),
  },
];

export default routes;
