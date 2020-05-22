import Vuex from "vuex";
import VueRouter from "vue-router";
import { mount, createLocalVue } from "@vue/test-utils";
import storeConfig from "@/store/store-config";
import routes from "@/router/routes";
import Pack from "../Pack.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
describe("Pack.vue", () => {
  it("match the snapshot", () => {
    const actions = { getAction: jest.fn() };
    const store = new Vuex.Store({ ...storeConfig, actions });
    const router = new VueRouter({ routes });
    const wrapper = mount(Pack, {
      localVue,
      router,
      store,
      propsData: {
        hash: 123
      }
    });
    expect(wrapper).toMatchSnapshot();
    expect(actions.getAction).toHaveBeenCalled();
  });
});
