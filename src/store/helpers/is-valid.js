import getValue from "./get-value";
import { getSuitInitial } from "./get-suit";
import { Suits, Values } from "./constants";

export default (values, value) => {
  if (!values || !value) return false;
  let valid = true;
  const validate = val => {
    if (valid && val) {
      const suit = getSuitInitial(val);
      valid = !suit
        ? false
        : Values.includes(getValue(val)) && Suits.includes(suit);
    }
  };
  validate(value);
  values.forEach(validate);

  return valid;
};
