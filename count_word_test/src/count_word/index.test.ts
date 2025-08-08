import {countWord} from "@/count_word";

test("Empty text and empty target", () => {
  expect(countWord("", "apple")).toBe(-1);
  expect(countWord("apple", "")).toBe(-1);
});

test("count", () => {
  expect(countWord("apple banana melon", "banana")).toBe(1);
});
