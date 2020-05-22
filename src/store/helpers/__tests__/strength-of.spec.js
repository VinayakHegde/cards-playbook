import strengthOf, { arrange } from "../strength-of";

describe("strengthOf", () => {
  let card = "7D";
  let rotation = "7D";
  it("should return empty -1", () => {
    expect(strengthOf()).toBe(-1);
    expect(strengthOf([])).toBe(-1);
    expect(strengthOf([], "X")).toBe(-1);
    expect(strengthOf([], "X", "Y")).toBe(-1);
    expect(strengthOf([1], "X", "Y", "Z")).toBe(-1);
    expect(strengthOf([], "X", "Y", 1)).toBe(-1);
    expect(strengthOf(["X"], "X", "Y", 1)).toBe(-1);
  });
  it("should return the strength", () => {
    expect(strengthOf(["X"], "X", "X", 1)).toBe(0);
    expect(strengthOf(["H", "D", "C", "S"], "S", "S", 1)).toBe(0);
    expect(strengthOf(["H", "D", "C", "S"], "S", "H", 1)).toBe(1);
    expect(strengthOf(["H", "D", "C", "S"], "S", "H", 999)).toBe(999);
    expect(
      strengthOf(
        ["2", "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3"],
        "10",
        "2",
        999
      )
    ).toBe(7992);
    expect(
      strengthOf(
        ["2", "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3"],
        "10",
        "2",
        1
      )
    ).toBe(8);
  });
});

describe("arrange", () => {
  const cards = ["7D", "AS", "QH", "9S", "6D"];
  it("should return empty list", () => {
    expect(arrange()).toEqual([]);
    expect(arrange([])).toEqual([]);
  });
  it("should return the rearranged list", () => {
    expect(arrange(cards)).toEqual(["6D", "7D", "AS", "QH", "9S"]);
    expect(arrange(cards, "X")).toEqual(["6D", "7D", "AS", "QH", "9S"]);
    expect(arrange(cards, "QH")).toEqual(["QH", "9S", "6D", "7D", "AS"]);
  });
});
