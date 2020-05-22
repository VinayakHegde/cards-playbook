export default (card = "") =>
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
