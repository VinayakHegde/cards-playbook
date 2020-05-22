import getSuit from "../get-suit";

describe("getSuit", () => {
  it("should return the suits correctly", () => {
    expect(getSuit("2s")).toEqual({ name: "spades" });
    expect(getSuit("2m")).toEqual(undefined);
  });
});
