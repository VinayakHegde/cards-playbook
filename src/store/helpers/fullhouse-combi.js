import getValue from "./get-value";
import sort from "./sorter";
import { FULLHOUSE_LENGTH } from "./constants";

export const hasConditionMet = reduced => {
  if (!reduced || reduced.length !== 2 || !reduced.sort) return false;
  const sorted = reduced.sort();
  return sorted.length === 2 && sorted[0] === 2 && sorted[1] === 3;
}

export const combi = (list, length) => {
  if (length > list.length || length <= 0) return [];

  if (length === list.length) return [list];

  if (length === 1) return list.reduce((acc, cur) => [...acc, [cur]], []);

  return list.reduce((acc, cur, index) => {
    combi(list.slice(index + 1), length - 1).forEach(next =>
      acc.push([cur, ...next])
    );
    return acc;
  }, []);
};

export const getFullHouseCombo = cards => {
  if (!cards || !cards.length) return [];
  return combi(cards, FULLHOUSE_LENGTH).filter(combi => {
    const values = combi.map(card => getValue(card));
    const unique = [
      ...new Set(values.filter((card, index) => values.indexOf(card) != index))
    ];
    return hasConditionMet(
      unique
        .reduce((acc, cur) => {
          acc.push(
            values.reduce((a, c) => {
              if (c.toUpperCase() === cur.toUpperCase()) a += 1;
              return a;
            }, 0)
          );
          return acc;
        }, [])
        .sort()
    );
  });
};

export default ({ cards, rotation }) => {
  if (!cards) return [];
  return getFullHouseCombo(cards).map(cards => {
    const sortedCombi = sort({ cards, rotation, reverse: true });
    return sortedCombi.map(z => {
      return `${z.value}${z.name
        .split("")
        .shift()
        .toUpperCase()}`;
    });
  });
};
