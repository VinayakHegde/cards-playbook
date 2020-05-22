import router from "../";
import routes from "../routes";

describe("router", () => {
  it("should match the routes provided", () => {
    expect(router.options.routes).toEqual(routes);
  });
  it("should match the snapshot", () => {
    expect(router).toMatchSnapshot();
  });
});
