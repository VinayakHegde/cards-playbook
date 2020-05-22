export default [
  {
    path: "/",
    redirect: {
      name: "Home"
    }
  },
  {
    path: "/deck/",
    redirect: {
      name: "Home"
    }
  },
  {
    path: "/deck/new",
    name: "Home",
    meta: {
      header: "CARDS"
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/Home.vue")
  },
  {
    path: "/deck/:hash",
    name: "Pack",
    meta: {
      header: "Ordered Pile"
    },
    component: () =>
      import(/* webpackChunkName: "Pack" */ "../views/pack/Pack.vue"),
    props: true
  },
  {
    path: "/error",
    name: "Error",
    meta: {
      header: "404 | Page not found"
    },
    component: () =>
      import(/* webpackChunkName: "Pack" */ "../views/error/Error.vue"),
    props: true
  },
  {
    path: "*",
    redirect: {
      name: "Error"
    }
  }
];
