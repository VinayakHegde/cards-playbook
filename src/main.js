import Vue from "vue";
import Route from "./views/route/Route.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Route)
}).$mount("#app");
