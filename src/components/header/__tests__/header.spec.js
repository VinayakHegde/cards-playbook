import { mount } from "@vue/test-utils";
import Header from "../Header.vue";
describe("Header.vue", () => {
  const wrapper = mount(Header);
  it("match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
