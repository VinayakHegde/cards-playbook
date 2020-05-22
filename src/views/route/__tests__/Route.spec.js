import Vuex from "vuex";
import VueRouter from "vue-router";
import { mount, createLocalVue } from "@vue/test-utils";
import storeConfig from "@/store/store-config";
import routes from "@/router/routes";
import Route from "../Route.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
describe("Route.vue", () => {
  it("match the snapshot", () => {
    const router = new VueRouter({ routes });
    const store = new Vuex.Store(storeConfig);
    const wrapper = mount(Route, {
      localVue,
      router,
      store
    });
    expect(wrapper).toMatchSnapshot();
  });
});
