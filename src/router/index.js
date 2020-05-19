import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "Cards"
    }
  },
  {
    path: "/deck/new",
    name: "Cards",
    meta: {
      header: "Cards"
    },
    component: () => import(/* webpackChunkName: "new" */ "../views/New.vue")
  },
  {
    path: "/deck/:hash",
    name: "orderedpile",
    meta: {
      header: "Ordered Pile"
    },
    component: () =>
      import(/* webpackChunkName: "orderedpile" */ "../views/OrderedPile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
