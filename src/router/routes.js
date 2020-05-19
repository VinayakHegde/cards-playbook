export default [
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
    component: () =>
      import(/* webpackChunkName: "new" */ "../views/new/New.vue")
  },
  {
    path: "/deck/:hash",
    name: "orderedpile",
    meta: {
      header: "Ordered Pile"
    },
    component: () =>
      import(
        /* webpackChunkName: "OrderPile" */ "../views/order-pile/OrderPile.vue"
      )
  }
];
