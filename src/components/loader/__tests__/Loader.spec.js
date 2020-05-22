import { mount } from "@vue/test-utils";
import Loader from "../Loader.vue";
describe("Loader.vue", () => {
  const wrapper = mount(Loader);
  it("match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
