import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import storeConfig from "@/store/store-config";
import * as axios from "@/service";

const localVue = createLocalVue();
localVue.use(Vuex);

jest.mock("@/service");
describe("store", () => {
  it("store.dispatch returns cards", async done => {
    const params = {
      cards: ["2S", "3S"],
      rotation: "AS",
      hash: 123
    };
    jest.spyOn(axios, "requestPiles").mockResolvedValue(params);

    const store = new Vuex.Store(storeConfig);

    await store.dispatch("getAction", params.hash);

    expect(store.getters.cards).toEqual([
      {
        name: "spades",
        order: 11,
        value: "3"
      },
      {
        name: "spades",
        order: 12,
        value: "2"
      }
    ]);
    done();
  });
});
