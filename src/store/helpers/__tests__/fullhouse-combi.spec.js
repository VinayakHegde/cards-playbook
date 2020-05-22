import possibleCombi, { fullHandCombinations, combi } from "../fullhouse-combi";

describe("fullhouse-combi", () => {
  const params = {
    cards: [],
    rotation: ""
  };
  it("should return empty list", () => {
    expect(possibleCombi(params)).toEqual([]);
  });
  it("should return all possible combinations", () => {
    params.cards = ["2H", "2D", "2C", "2S", "3H", "3D", "3C"];
    params.rotation = "2H";
    expect(possibleCombi(params)).toEqual([
      ["2H", "2D", "2C", "3H", "3D"],
      ["2H", "2D", "2C", "3H", "3C"],
      ["2H", "2D", "2C", "3D", "3C"],
      ["2H", "2D", "2S", "3H", "3D"],
      ["2H", "2D", "2S", "3H", "3C"],
      ["2H", "2D", "2S", "3D", "3C"],
      ["2H", "2D", "3H", "3D", "3C"],
      ["2H", "2C", "2S", "3H", "3D"],
      ["2H", "2C", "2S", "3H", "3C"],
      ["2H", "2C", "2S", "3D", "3C"],
      ["2H", "2C", "3H", "3D", "3C"],
      ["2H", "2S", "3H", "3D", "3C"],
      ["2D", "2C", "2S", "3H", "3D"],
      ["2D", "2C", "2S", "3H", "3C"],
      ["2D", "2C", "2S", "3D", "3C"],
      ["2D", "2C", "3H", "3D", "3C"],
      ["2D", "2S", "3H", "3D", "3C"],
      ["2C", "2S", "3H", "3D", "3C"]
    ]);
  });
});

describe("fullHandCombinations", () => {
  let cards = [];
  it("should return empty list", () => {
    expect(fullHandCombinations(cards)).toEqual([]);
  });
  it("should  return empty list when no condition met", () => {
    cards = ["2H", "2D", "3D", "3C"];
    expect(fullHandCombinations(cards)).toEqual([]);
  });
  it("should return all possible combinations", () => {
    cards = ["2H", "2D", "2C", "2S", "3H", "3D", "3C"];
    expect(fullHandCombinations(cards)).toEqual([
      ["2H", "2D", "2C", "3H", "3D"],
      ["2H", "2D", "2C", "3H", "3C"],
      ["2H", "2D", "2C", "3D", "3C"],
      ["2H", "2D", "2S", "3H", "3D"],
      ["2H", "2D", "2S", "3H", "3C"],
      ["2H", "2D", "2S", "3D", "3C"],
      ["2H", "2D", "3H", "3D", "3C"],
      ["2H", "2C", "2S", "3H", "3D"],
      ["2H", "2C", "2S", "3H", "3C"],
      ["2H", "2C", "2S", "3D", "3C"],
      ["2H", "2C", "3H", "3D", "3C"],
      ["2H", "2S", "3H", "3D", "3C"],
      ["2D", "2C", "2S", "3H", "3D"],
      ["2D", "2C", "2S", "3H", "3C"],
      ["2D", "2C", "2S", "3D", "3C"],
      ["2D", "2C", "3H", "3D", "3C"],
      ["2D", "2S", "3H", "3D", "3C"],
      ["2C", "2S", "3H", "3D", "3C"]
    ]);
  });
  it("should  return empty list when no condition met", () => {
    cards = ["2H", "2D", "3D", "3C"];
    expect(fullHandCombinations(cards)).toEqual([]);
  });
});

describe("combi", () => {
  let cards = [];
  it("should return empty list", () => {
    expect(combi(cards)).toEqual([]);
    expect(combi(cards, 0)).toEqual([]);
    expect(combi(cards, -1)).toEqual([]);
    cards = ["2H", "2D", "2C", "2S", "3H", "3D", "3C"];
    expect(combi(cards, 10)).toEqual([]);
  });
  it("should return all possible combinations", () => {
    expect(combi(cards, 5)).toEqual([
      ["2H", "2D", "2C", "2S", "3H"],
      ["2H", "2D", "2C", "2S", "3D"],
      ["2H", "2D", "2C", "2S", "3C"],
      ["2H", "2D", "2C", "3H", "3D"],
      ["2H", "2D", "2C", "3H", "3C"],
      ["2H", "2D", "2C", "3D", "3C"],
      ["2H", "2D", "2S", "3H", "3D"],
      ["2H", "2D", "2S", "3H", "3C"],
      ["2H", "2D", "2S", "3D", "3C"],
      ["2H", "2D", "3H", "3D", "3C"],
      ["2H", "2C", "2S", "3H", "3D"],
      ["2H", "2C", "2S", "3H", "3C"],
      ["2H", "2C", "2S", "3D", "3C"],
      ["2H", "2C", "3H", "3D", "3C"],
      ["2H", "2S", "3H", "3D", "3C"],
      ["2D", "2C", "2S", "3H", "3D"],
      ["2D", "2C", "2S", "3H", "3C"],
      ["2D", "2C", "2S", "3D", "3C"],
      ["2D", "2C", "3H", "3D", "3C"],
      ["2D", "2S", "3H", "3D", "3C"],
      ["2C", "2S", "3H", "3D", "3C"]
    ]);
  });
});
