import highCard from "../high-card";

describe("highCard", () => {
  it("should return the highCard correctly", () => {
    expect(highCard({ rotation: "2s", cards: ["as", "ks"] })).toBe("AS");
    expect(highCard({ rotation: "2s", cards: ["as", "ks"] })).toBe("AS");
    expect(highCard()).toBeNull();
  });
});
