import {calculate} from "@/calculator";

describe("difficult success", () => {
  test("works with an operator without any spaces [XzcVGm2ZC5jM_kSq7r78w]", () => {
    const res = calculate("1 1+");
    expect(res).toBe(2);
  });
  test("works with multiple operators coalesced [mkWExG4sGJnsZOTEdSwVZ]", () => {
    const res = calculate("1 2+3 4 +*");
    expect(res).toBe(21);
  });
  test("works with complex input with less spaces [z9qlZ5BbdcwabaNRvM07f]", () => {
    const res = calculate(
      "500 132+132-2*100 10 10*+-50 50 50 50++++10 999*+24+",
    );
    expect(res).toBe(11014);
  });
  test("calculates negative values [J1CnSIKBC5iMWr50fVy95]", () => {
    const res = calculate("0 4- 0 2- /");
    expect(res).toBe(2);
  });
  test("works with many spaces [u9tZnrwu2N3KRwZJE85Iv]", () => {
    const res = calculate("10    3      /");
    expect(res).toBe(3);
  });
});
