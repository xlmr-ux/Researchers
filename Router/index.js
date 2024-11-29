import Vue from "vue";
import Router from "vue-router";

import HomePage from "@/components/Pages.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    { path: "/services", component: HomePage, props: { page: "services" } },
    { path: "/about", component: HomePage, props: { page: "about" } },
    { path: "/order", component: HomePage, props: { page: "order" } },
    { path: "/contact", component: HomePage, props: { page: "contact" } },
  ],
});
