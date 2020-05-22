import getValue from "../get-value";

describe("getValue", () => {
  it("should return the value correctly", () => {
    expect(getValue("2s")).toBe("2");
    expect(getValue("20m")).toBe("20");
  });
});
