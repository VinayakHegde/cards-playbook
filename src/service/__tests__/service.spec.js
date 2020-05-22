import axios from "axios";

import { requestCreate, requestPiles } from "..";

jest.mock("axios");

const cards = ["a", "b", "c"];
const rotation = "c";

describe("requestCreate", () => {
  it("fetches successfully data from an API", () => {
    const mockFn = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ success: true }));
    jest.spyOn(axios, "get").mockImplementationOnce(mockFn);
    requestCreate(cards, rotation);

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });
});

describe("requestPiles", () => {
  it("fetches successfully data from an API", () => {
    const mockFn = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ success: true }));
    jest.spyOn(axios, "get").mockImplementationOnce(mockFn);
    requestPiles("hash");

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });
});
