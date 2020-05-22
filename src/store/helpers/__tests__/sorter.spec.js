import sort, { getOrder } from "../sorter";

describe("sort", () => {
  const params = {
    cards: ["7D", "AS", "QH", "9S", "6D"],
    rotation: "2H"
  };
  const sortedCards = [
    {
      name: "hearts",
      order: 3,
      value: "Q"
    },
    {
      name: "diamonds",
      order: 1007,
      value: "7"
    },
    {
      name: "diamonds",
      order: 1008,
      value: "6"
    },
    {
      name: "spades",
      order: 2998,
      value: "A"
    },
    {
      name: "spades",
      order: 3003,
      value: "9"
    }
  ];
  it("should return tempty list", () => {
    expect(sort()).toEqual([]);
    expect(sort({ cards: [] })).toEqual([]);
  });
  it("should return the cards in sorted order", () => {
    expect(sort(params)).toEqual(sortedCards);
  });
});
describe("getOrder", () => {
  const cards = ["7D", "AS", "QH", "9S", "6D"];
  const rotation = "2H";
  const orders = [1007, 2998, 3, 3003, 1008];
  it("should return empty list", () => {
    expect(getOrder()).toBe(-1);
    expect(getOrder("x")).toBe(-1);
    expect(getOrder("", "")).toBe(-1);
    expect(getOrder("ab", "cd")).toBe(-1);
    expect(getOrder("as", "cd")).toBe(-1);
  });
  it("should return the cards in sorted order", () => {
    expect(cards.map(card => getOrder(card, rotation))).toEqual(orders);
  });
});
