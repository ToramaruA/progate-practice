import {calculate} from "@/calculator";

describe("syntax error", () => {
  test("returns an error on input that not expression [mjYHW1XPUcCmL4dMJ6gKX]", () => {
    const res = calculate("1 1");
    expect(res).toBeInstanceOf(Error);
  });
  test("returns an error on input that minus number [Hqtn6oIqHCh-d1OQcXMER]", () => {
    const res = calculate("-1 -1 +");
    expect(res).toBeInstanceOf(Error);
  });
  test("returns an error on input that addition in Neutral Notation [Y3nDgYEmvQPeVNzIzlMB7]", () => {
    const res = calculate("1 + 1");
    expect(res).toBeInstanceOf(Error);
  });
  test("returns an error on input too many binary operations [ex-jNBCh1uNGm8qfo_L17]", () => {
    const res = calculate("1 1 + -");
    expect(res).toBeInstanceOf(Error);
  });
  test("returns an error on input that subtraction in Neutral Notation [h4jeMg53OMmCAMWNz2oKZ]", () => {
    const res = calculate("1 - 1");
    expect(res).toBeInstanceOf(Error);
  });
  test("returns an error on input that multiplication in Neutral Notation [tKILldZjhgbjArSiAqF65]", () => {
    const res = calculate("1 * 1");
    expect(res).toBeInstanceOf(Error);
  });
  test("returns an error on input that division in Neutral Notation [Kp8knO4QVIH--dTSdTX6c]", () => {
    const res = calculate("1 / 1");
    expect(res).toBeInstanceOf(Error);
  });
});
