import getters from "../getters";

describe("getters", () => {
  const state = {
    hash: "1234",
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

  it("hash() should return the hash from state", () => {
    const res = getters.hash(state);
    expect(res).toBe("1234");
  });
  it("cards() should return the sorted cards from state", () => {
    const res = getters.cards(state);
    expect(res).toEqual(sortedCards);
  });
  it("rotation() should return the rotation from state", () => {
    const res = getters.rotation(state);
    expect(res).toBe("2H");
  });
  it("highCard() should return the Card with highest precedence", () => {
    const res = getters.highCard(state);
    expect(res).toBe("QH");
  });
  it("fullHouseCombi() should return the empty array", () => {
    const res = getters.fullHouseCombi(state);
    expect(res).toEqual([]);
  });
  it("canAnalyse() should be true", () => {
    const res = getters.canAnalyse(state);
    expect(res).toBeTruthy();
  });
});
