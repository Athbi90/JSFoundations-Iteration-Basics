/**************************
 *
 * THIS IS A TESTING FILE
 *
 * DO NOT MODIFY THIS FILE
 *
 ***************************/

import {
  getOdds,
  getEvens,
  countOccurences,
  makeThemDoctors,
} from "./arrayFunctions";

describe("getOdds(numbers)", () => {
  test("returns an array of only ODD numbers.", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const odds = [1, 3, 5, 7, 9];
    expect(getOdds(numbers)).toEqual(odds);
  });
});

describe("getEvens(numbers)", () => {
  test("returns an array of only EVEN numbers.", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evens = [2, 4, 6, 8, 10];
    expect(getEvens(numbers)).toEqual(evens);
  });
});

describe("countOccurences(x, numbers)", () => {
  test("returns the number of times `x` occurs in `numbers`.", () => {
    const numbers = [1, 2, 1, 3, 4, 5, 6, 1, 7, 8, 1, 9, 10];
    const x = 1;
    const duplicates = 4;
    expect(countOccurences(x, numbers)).toEqual(duplicates);
  });
});

describe("makeThemDoctors(students)", () => {
  test("return the same array with all elements appended 'Dr. '", () => {
    expect(makeThemDoctors(["x", "y", "z"])).toEqual([
      "Dr. x",
      "Dr. y",
      "Dr. z",
    ]);
  });
});
