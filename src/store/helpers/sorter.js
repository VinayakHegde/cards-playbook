import getSuit, { getSuitInitial } from "./get-suit";
import getValue from "./get-value";
import isValid from "./is-valid";
import { Suits, Values, Strength } from "./constants";

export const arrange = (list, element) => {
  if (!list || !list.length) return [];
  const index = list.indexOf(element);
  return index < 0
    ? [...list.slice(index), ...list.slice(0, list.length + index)]
    : [...list.slice(index, list.length), ...list.slice(0, index)];
};

export const getOrder = (card, rotation = "", reverse = false) => {
  if (!card || !rotation) return -1;
  if (!isValid([card], rotation)) return -1;
  const rSuit = getSuitInitial(rotation);
  const rValue = getValue(rotation);

  const cSuit = getSuitInitial(card);
  const cValue = getValue(card);
  const a =
    arrange(Values, rValue).findIndex(r => r === cValue) *
    (reverse ? Strength.suit : Strength.value);
  const b =
    arrange(Suits, rSuit).findIndex(s => s === cSuit) *
    (reverse ? Strength.value : Strength.suit);
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
