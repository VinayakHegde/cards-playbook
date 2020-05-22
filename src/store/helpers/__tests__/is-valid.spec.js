import isValid from "../is-valid";

describe("isValid", () => {
  it("should validate the card and rotation", () => {
    expect(isValid(["as", "ks"], "2s")).toBeTruthy();
    expect(isValid([], "2s")).toBeTruthy();
    expect(isValid(["az", "ks"], "2s")).toBeFalsy();
    expect(isValid(["as", "ks"], "2x")).toBeFalsy();
    expect(isValid(["20s", "ks"], "2s")).toBeFalsy();
    expect(isValid()).toBeFalsy();
  });
});
