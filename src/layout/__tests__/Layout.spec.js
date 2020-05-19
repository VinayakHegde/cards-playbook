import VueRouter from "vue-router";
import { mount, createLocalVue  } from "@vue/test-utils";
import Layout from "../Layout.vue";
import routes from "../../router/routes";

const localVue = createLocalVue();
localVue.use(VueRouter);
describe("Layout.vue", () => {
  it("match the snapshot", () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(Layout, {
      localVue,
      router
    });
    expect(wrapper).toMatchSnapshot();
  });
});
