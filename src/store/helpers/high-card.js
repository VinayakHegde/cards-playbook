import sort from "./sorter";

export default state => {
  const highCard = sort(state).shift();
  return !highCard
    ? null
    : `${highCard.value}${highCard.name
        .split("")
        .shift()
        .toUpperCase()}`;
};
