import { requestCreate, requestPiles } from "@/service";
import isValid from "./helpers/is-valid";

const submitAction = async ({ commit }, { cards, rotation }) => {
  const values = cards.reduce((acc, curr) => {
    if (curr.value) {
      acc.push(curr.value);
    }
    return acc;
  }, []);
  const { value } = rotation;

  if (!values.length || !value) {
    return null;
  }

  if (!isValid(values, value)) {
    return null;
  }
  commit("MUTATE_LOADER", true);

  const { hash, ...theRest } = await requestCreate(values, value);
  commit("MUTATE_STATE", { hash, ...theRest });
  commit("MUTATE_LOADER", false);

  return hash;
};

export const getAction = async ({ commit }, hashId) => {
  if (!hashId) {
    return null;
  }
  commit("MUTATE_LOADER", true);
  const { error, hash, ...theRest } = await requestPiles(hashId);
  if (error) {
    return { error };
  }
  commit("MUTATE_STATE", { hash, ...theRest });
  commit("MUTATE_LOADER", false);
  return theRest;
};

const setLoader = ({ commit }, value) => {
  commit("MUTATE_LOADER", value);
};

export default {
  submitAction,
  getAction,
  setLoader
};
