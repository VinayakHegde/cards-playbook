export const arrange = (list, element) => {
  if (!list || !list.length) return [];
  const index = list.indexOf(element);
  return index < 0
    ? [...list.slice(index), ...list.slice(0, list.length + index)]
    : [...list.slice(index, list.length), ...list.slice(0, index)];
};

export default (list, element, comparer, strength) => {
  if (!list || !list.length || !element || !comparer || isNaN(strength))
    return -1;
  return arrange(list, element).findIndex(r => r === comparer) * strength;
};
