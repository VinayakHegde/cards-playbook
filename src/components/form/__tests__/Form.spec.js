import Vuex from "vuex";
import VueRouter from "vue-router";
import { mount, createLocalVue } from "@vue/test-utils";
import storeConfig from "@/store/store-config";
import routes from "@/router/routes";
import Form from "../Form.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter({ routes });

let actions;
let store;
beforeEach(() => {
  actions = { submitAction: jest.fn() };
  store = new Vuex.Store({ ...storeConfig, actions });
});
describe("Form.vue", () => {
  it("match the snapshot", () => {
    const wrapper = mount(Form, {
      localVue,
      router,
      store
    });
    expect(wrapper).toMatchSnapshot();
  });
  it("form submit should call submit method", async () => {
    const wrapper = mount(Form, {
      localVue,
      router,
      store
    });
    jest.spyOn(wrapper.vm, "submit").mockImplementation();
    wrapper.find("button").trigger("submit");
    expect(wrapper.vm.submit).toHaveBeenCalled();
  });
  it("form submit should call submitAction", async () => {
    const wrapper = mount(Form, {
      localVue,
      router,
      store
    });
    wrapper.find("button").trigger("submit");
    expect(actions.submitAction).toHaveBeenCalled();
  });
});
