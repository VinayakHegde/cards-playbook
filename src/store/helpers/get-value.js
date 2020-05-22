export default (card = "") =>
  !card
    ? ""
    : card
        .split("")
        .splice(0, card.length - 1)
        .join("")
        .toUpperCase();
