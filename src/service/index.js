import axios from "axios";

const BASEURL = "https://deckofcardsapi.com/api/";

const ROTATION = "Rotation";

const getPileName = withRotation => {
  return `${withRotation ? "with" : "no"}${ROTATION}`;
};

export const requestCreate = (cards = [], rotation = "") => {
  const cardSet = [...new Set([...cards, rotation])];
  const params = `cards=${cardSet.join(",")}`;
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASEURL}deck/new?${params}`)
      .then(async ({ data }) => {
        if (data.success) {
          const { deck_id: hash } = data;
          const partUrl = `${BASEURL}deck/${hash}`;
          const pileName = getPileName(cards.includes(rotation));
          await axios.get(`${partUrl}/draw?count=${cardSet.length}`);
          await axios.get(`${partUrl}/pile/table/add?cards=${cards.join(",")}`);
          await axios.get(`${partUrl}/pile/${pileName}/add?cards=${rotation}`);
          resolve({ hash, cards: cardSet, rotation });
        }
      })
      .catch(() => reject(Error("API Error: Failed to create the deck")));
  });
};

export const requestPiles = async hash => {
  return new Promise(resolve => {
    axios
      .get(`${BASEURL}deck/${hash}/pile/table/list`)
      .then(async ({ data: { piles, success } }) => {
        if (success) {
          const {
            table: { cards: tableCards },
            withRotation
          } = piles;
          const pileName = getPileName(withRotation);
          const { data } = await axios.get(
            `${BASEURL}deck/${hash}/pile/${pileName}/list`
          );
          if (data.success) {
            const cards = tableCards.map(m => m.code);
            const rotation = data.piles[pileName].cards.map(m => m.code)[0];
            if (pileName.includes("with")) {
              cards.push(rotation);
            }
            resolve({ rotation, cards, hash });
          } else {
            resolve({ rotation: null, cards: null, hash: null });
          }
        } else {
          resolve({ rotation: null, cards: null, hash: null });
        }
      })
      .catch(() => resolve({ error: true }));
  });
};
