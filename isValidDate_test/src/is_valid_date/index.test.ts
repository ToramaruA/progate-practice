import {isValidDate} from "@/is_valid_date";

test("all true", () => {
  expect(isValidDate(2025, 2, 28)).toBe(true);
  expect(isValidDate(2024, 2, 29)).toBe(true);
});

test("year: false", () => {
  expect(isValidDate(0.1, 2, 28)).toBe(false);
});

test("month: false", () => {
  expect(isValidDate(2025, 0.1, 28)).toBe(false);
});

test("day: false", () => {
  expect(isValidDate(2025, 2, 0.1)).toBe(false);
});

test("not leap year", () => {
  expect(isValidDate(2025, 2, 29)).toBe(false);
});
