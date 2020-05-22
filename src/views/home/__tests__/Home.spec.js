import VueRouter from "vue-router";
import { mount, createLocalVue } from "@vue/test-utils";
import Home from "../Home.vue";
import routes from "@/router/routes";

const localVue = createLocalVue();
localVue.use(VueRouter);
describe("Home.vue", () => {
  it("match the snapshot", () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(Home, {
      localVue,
      router
    });
    expect(wrapper).toMatchSnapshot();
  });
});
