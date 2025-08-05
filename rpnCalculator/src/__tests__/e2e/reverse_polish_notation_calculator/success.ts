import {calculate} from "@/calculator";

describe("rpn calculator", () => {
  test("works with simple addition expression [RIFWisBD88aZ-rsK-OPCJ]", () => {
    const res = calculate("1 1 +");
    expect(res).toBe(2);
  });
  test("works with combination of simple expressions [pMyf_B8IL_k3SdSn7K8F4]", () => {
    const res = calculate("1 2 + 3 4 + *");
    expect(res).toBe(21);
  });
  test("works with complex expression [Z52toM7J84HB8vtCmv8xg]", () => {
    const res = calculate(
      "500 132 + 132 - 2 * 100 10 10 * + - 50 50 50 50 + + + + 10 999 * + 24 +",
    );
    expect(res).toBe(11014);
  });
  test("works with division [ravntIf-7I9oevYTaTbc1]", () => {
    const res = calculate("4 2 /");
    expect(res).toBe(2);
  });
  test("return the value with the decimal point truncated [-bBYsU3lSjGwtj1aoTS3N]", () => {
    const res = calculate("10 3 /");
    expect(res).toBe(3);
  });
  test("calculate the value with the decimal point truncated [-VC4oAtaZBdfbayJO5WKM]", () => {
    const res = calculate("1 2 / 1 2 / +");
    expect(res).toBe(0);
  });
  test("works with input to be minus number after calculation [H4E-jTP6jGJRken2IPrrw]", () => {
    const res = calculate("0 10 - 3 /");
    expect(res).toBe(-3);
  });
});
