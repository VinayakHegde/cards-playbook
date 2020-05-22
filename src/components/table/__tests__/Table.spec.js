import Vuex from "vuex";
import VueRouter from "vue-router";
import { mount, createLocalVue } from "@vue/test-utils";
import storeConfig from "@/store/store-config";
import routes from "@/router/routes";
import Table from "../Table.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
describe("Table.vue", () => {
  it("match the snapshot", () => {
    const store = new Vuex.Store(storeConfig);

    const router = new VueRouter({ routes });
    const wrapper = mount(Table, {
      localVue,
      router,
      store
    });
    expect(wrapper).toMatchSnapshot();
  });
});
