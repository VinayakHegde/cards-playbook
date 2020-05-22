import getValue from "./get-value";
import sort from "./sorter";

export const combi = (list, length) => {
  if (length > list.length || length <= 0) return [];

  if (length === list.length) return [list];

  if (length === 1) return list.reduce((acc, cur) => [...acc, [cur]], []);

  const combinations = [];

  for (let index = 0; index <= list.length - length + 1; index++) {
    const set = combi(list.slice(index + 1), length - 1);
    for (let jIndex = 0; jIndex < set.length; jIndex++) {
      combinations.push([list[index], ...set[jIndex]]);
    }
  }

  return combinations;
};

export const fullHandCombinations = cards => {
  if (!cards || !cards.length) return [];
  return combi(cards, 5).filter(combi => {
    const values = combi.map(card => getValue(card));
    const sameRanks = values.filter(
      (card, index) => values.indexOf(card) != index
    );
    const reduced = [...new Set(sameRanks)]
      .reduce((acc, cur) => {
        acc.push(
          values.reduce((a, c) => {
            if (c.toUpperCase() === cur.toUpperCase()) a += 1;
            return a;
          }, 0)
        );
        return acc;
      }, [])
      .sort();
    return reduced.length === 2 && reduced[0] === 2;
  });
};

export default ({ cards, rotation }) => {
  if (!cards) return [];
  return fullHandCombinations(cards).map(cards => {
    const sortedCombi = sort({ cards, rotation, reverse: true });
    return sortedCombi.map(z => {
      return `${z.value}${z.name
        .split("")
        .shift()
        .toUpperCase()}`;
    });
  });
};
