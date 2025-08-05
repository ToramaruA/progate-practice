import {calculate} from "@/calculator";

describe("zero division error", () => {
  test("returns an error on input that division by zero [oUA2TDtI5sxy51jj-owHi]", () => {
    const res = calculate("1 0 /");
    expect(res).toBeInstanceOf(Error);
  });
  test("returns an error on input to be zero after calculation [JG68kpT6W6jiNGyhyl29Y]", () => {
    const res = calculate("1 1 1 - /");
    expect(res).toBeInstanceOf(Error);
  });
});
