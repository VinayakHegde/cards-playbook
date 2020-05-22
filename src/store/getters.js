import sort from "./helpers/sorter";
import highCard from "./helpers/high-card";
import fullHouseCombi from "./helpers/fullhouse-combi";

export default {
  hash: ({ hash }) => hash,
  cards: state => sort(state),
  rotation: ({ rotation }) => rotation,
  highCard,
  fullHouseCombi,
  canAnalyse: state => sort(state).length > 0,
  loading: ({ loading }) => loading
};
