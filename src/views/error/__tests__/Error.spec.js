import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import routes from "@/router/routes";
import Error from "@/views/error/Error.vue";
import storeConfig from "@/store/store-config";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
describe("Route.vue", () => {
  it("match the snapshot", () => {
    const router = new VueRouter({ routes });
    const store = new Vuex.Store(storeConfig);
    const wrapper = mount(Error, {
      localVue,
      router,
      store
    });
    expect(wrapper).toMatchSnapshot();
    wrapper.find("a").trigger("click");

    localVue.nextTick(() => {
      expect(wrapper.vm.$route.fullPath).toBe("/");
    });
  });
});
