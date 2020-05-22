const getSuit = (card = "") =>
  !card
    ? ""
    : {
        H: { name: "hearts" },
        D: { name: "diamonds" },
        C: { name: "clubs" },
        S: { name: "spades" }
      }[
        card
          .split("")
          .pop()
          .toUpperCase()
      ];
export default getSuit;

export const getSuitInitial = card => {
  if (!card) return null;
  const suit = getSuit(card);

  if (!suit) return null;
  return suit.name
    .split("")
    .shift()
    .toUpperCase();
};
