// Require functions from server to test
const { calculate, sum } = require("./server");

class Shape {
    constructor(name) {
        this.name = name;
    }
}

// TRUTHINESS
test("It should be null", () => {
  const variable = null;

  // toBeNull
  expect(variable).toBeNull();
  // toBeDefined
  expect(variable).toBeDefined();
  // toBeUndefined
  expect(variable).not.toBeUndefined();
  // toBeTruthy
  expect(variable).not.toBeTruthy();
  // toBeFalsy
  expect(variable).toBeFalsy();
});

// NUMBERS
// toBeGreaterThan
test("Add 1 + 2 to be greater than 2", () => {
  expect(sum(1, 2)).toBeGreaterThan(2);
});
// toBeGreaterThanOrEqual
test("Add 1 + 2 to be greater than or equal to 3", () => {
  expect(sum(1, 2)).toBeGreaterThanOrEqual(3);
});
// toEqual
test("Add 1 + 2 to equal to 3", () => {
    expect(sum(1, 2)).toEqual(3);
});
// toBeLessThan
test("Add 1 + 2 to be less than 5", () => {
    expect(sum(1, 2)).toBeLessThan(5);
  });
// toBeLessThanOrEqual
test("Add 1 + 2 to be less than or equal to 5", () => {
    expect(sum(1, 2)).toBeLessThanOrEqual(5);
  });

// STRINGS
// toMatch
test("The word matches Apple", () => {
    expect("Apple").toMatch("Apple");
});

// ARRAYS AND ITERABLES
const programming = ["JavaScript", "C#", "Java", "Python"];
// toContain
test("The list contains JavaScript", () => {
    expect(programming).toContain("JavaScript");
});
// toHaveLength
test("List is a length of 4", () => {
    expect(programming).toHaveLength(4);
});

// OBJECTS
test("Should equal", () => {
    const square = new Shape("square");

    expect(square).toEqual(Shape);
});
// toMatchObject
// toHaveProperty
// toStrictEqual

// EXCEPTIONS
// toThrow
// toThrowError



// OTHERS
// toBe - UNIVERSALLY USED

// toBeInstanceOf
test("Elements of array are all instances of String", () => {
    const square = new Shape("square");

    expect(square).toBeInstanceOf(Shape);
});
