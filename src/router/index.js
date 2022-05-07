// config vue router and routes

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sketchbook from "../views/Sketchbook.vue";
import Info from "../views/Info.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Sketchbook",
    name: "Sketchbook",
    component: Sketchbook,
  },
    {
        path: "/Info",
        name: "Info",
        component: Info
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
