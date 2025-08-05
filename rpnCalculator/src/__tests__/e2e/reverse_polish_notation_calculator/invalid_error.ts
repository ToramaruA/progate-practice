import {calculate} from "@/calculator";

describe("invalid error", () => {
  test("returns an error on invalid alphabetical input [2NdLfOZRXVUXS6O8rabcV]", () => {
    const res = calculate("abcde");
    expect(res).toBeInstanceOf(Error);
  });
  test("returns an error on invalid input that a number contains a decimal point [DTFbnHgE0_Lhhyz70xYmL]", () => {
    const res = calculate("1.5 1.5 +");
    expect(res).toBeInstanceOf(Error);
  });
  test("returns an error on unexpected symbols [cvE9JAwgXqCUWW1ru8Shj]", () => {
    const res = calculate("?>|^%=");
    expect(res).toBeInstanceOf(Error);
  });
});
