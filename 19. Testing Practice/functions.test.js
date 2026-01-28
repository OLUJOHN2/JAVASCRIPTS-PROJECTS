const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
} = require("./functions");

/* Capitalize */

test("capitalizes the first character of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

/* Reverse String */

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

/* Calculator */

test("adds two numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("multiplies two numbers", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("divides two numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

/* Caesar Cipher */

test("shifts letters correctly", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves letter case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("keeps punctuation unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

/* Analyze Array */

test("analyzes an array of numbers", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

