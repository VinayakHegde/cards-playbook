import actions from "../actions";
import * as axios from "@/service";

jest.mock("@/service");
describe("actions", () => {
  it("actions.submitAction should call commit", async done => {
    const params = {
      cards: [{ value: "2S" }, { value: "3S" }],
      rotation: { value: "AS" }
    };
    jest
      .spyOn(axios, "requestCreate")
      .mockResolvedValue({ hash: 123, ...params });
    const commit = jest.fn();
    await actions.submitAction({ commit }, params);
    expect(axios.requestCreate).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith("MUTATE_STATE", {
      hash: 123,
      ...params
    });
    done();
  });
  it("actions.getAction should call commit", async done => {
    const params = {
      cards: ["2S", "3S"],
      rotation: "AS",
      hash: 123
    };
    jest.spyOn(axios, "requestPiles").mockResolvedValue(params);
    const commit = jest.fn();
    await actions.getAction({ commit }, params.hash);
    expect(axios.requestPiles).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith("MUTATE_STATE", params);
    done();
  });
});
