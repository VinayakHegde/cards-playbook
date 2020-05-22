import mutations from "../mutations";
describe("mutations", () => {
  it("MUTATE_STATE updates state with items in payload", () => {
    const state = {
      hash: null,
      cards: null,
      rotation: null
    };
    const newState = {
      hash: 123,
      cards: [],
      rotation: ""
    };
    mutations.MUTATE_STATE(state, newState);
    expect(state.hash).toBe(123);
    expect(state.cards).toEqual([]);
    expect(state.rotation).toBe("");
  });
});
