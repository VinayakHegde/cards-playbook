import getSuit, { getSuitInitial } from "../get-suit";

describe("getSuit", () => {
  it("should return the suits correctly", () => {
    expect(getSuit("2s")).toEqual({ name: "spades" });
    expect(getSuit("2m")).toBeUndefined();
  });
});

describe("getSuitInitial", () => {
  it("should return the Suit Initial correctly", () => {
    expect(getSuitInitial()).toBeNull();
    expect(getSuitInitial("2s")).toBe("S");
    expect(getSuitInitial("2m")).toBeNull();
  });
});
