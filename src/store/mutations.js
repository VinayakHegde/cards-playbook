export default {
  MUTATE_STATE(state, { hash, cards, rotation }) {
    state.hash = hash;
    state.cards = cards;
    state.rotation = rotation;
  },
  MUTATE_LOADER(state, loading) {
    state.loading = loading;
  }
};
