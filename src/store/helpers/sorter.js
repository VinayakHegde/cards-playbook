import getSuit, { getSuitInitial } from "./get-suit";
import getValue from "./get-value";
import isValid from "./is-valid";
import strengthOf from "./strength-of";
import { Suits, Values, Strength } from "./constants";

export const getOrder = (card, rotation = "", reverse = false) => {
  if (!card || !rotation) return -1;
  if (!isValid([card], rotation)) return -1;
  const a = strengthOf(
    Values,
    getValue(rotation),
    getValue(card),
    reverse ? Strength.suit : Strength.value
  );
  const b = strengthOf(
    Suits,
    getSuitInitial(rotation),
    getSuitInitial(card),
    reverse ? Strength.value : Strength.suit
  );
  return a + b;
};
export const cardObject = card => ({
  ...getSuit(card),
  value: getValue(card)
});

export default props => {
  if (!props) return [];
  const { cards, rotation, reverse } = props;
  return (cards || [])
    .map(card => ({
      ...cardObject(card),
      order: getOrder(card, rotation, reverse)
    }))
    .sort((a, b) => a.order - b.order);
};
