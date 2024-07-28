// Require functions from server to test
const { calculate, sum, logger, notFound } = require("./server");

// TRUTHINESS
// describe() => defines what kinds of tests will be executed in the console for readability
describe('Truthiness', () => {
  // test() => alias for the test you are running - will show as so in the console

  // Example (view from the console):
  // Truthiness
  //    ✓ It should be null
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
});

// NUMBERS
describe('Numbers', () => {
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
      expect(calculate(1, 2, "add")).toEqual(3);
  });
  // toBeLessThan
  test("Add 1 + 2 to be less than 5", () => {
      expect(calculate(1, 2, "add")).toBeLessThan(5);
    });
  // toBeLessThanOrEqual
  test("Add 1 + 2 to be less than or equal to 5", () => {
      expect(calculate(1, 2, "add")).toBeLessThanOrEqual(5);
    });
});

// STRINGS
describe('Strings', () => {
  // toMatch
  test("The word matches Apple", () => {
      expect("Apple").toMatch("Apple");
  });
});

// ARRAYS AND ITERABLES
describe('Arrays', () => {
  const programming = ["JavaScript", "C#", "Java", "Python"];
  // toContain
  test("The list contains JavaScript", () => {
      expect(programming).toContain("JavaScript");
  });
  // toHaveLength
  test("List is a length of 4", () => {
      expect(programming).toHaveLength(4);
  });
});

describe('Objects', () => {
  class Shape {
    constructor(name) {
        this.name = name;
    }
  }
  // toBeInstanceOf
  test("Variable is an instance of the Shape object", () => {
      const square = new Shape("square");

      expect(square).toBeInstanceOf(Shape);
  });
  // Other object tests:
  // toMatchObject
  // toHaveProperty
  // toStrictEqual
});

/* EXTRA TESTS - FOR REFERENCE! */
/* Not to be written in class time! */

// Tests for logger middleware
describe('logger middleware', () => {
  test('logs the request URL', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const req = { url: '/test' };
    const res = {};
    const next = jest.fn();

    logger(req, res, next);

    expect(consoleSpy).toHaveBeenCalledWith('Received request to path: /test');
    expect(next).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});

// Tests for notFound middleware
describe('notFound middleware', () => {
  test('sends a 404 response', () => {
    const req = {};
    const res = {
      writeHead: jest.fn(),
      write: jest.fn(),
      end: jest.fn()
    };
    const next = jest.fn();

    notFound(req, res, next);

    expect(res.writeHead).toHaveBeenCalledWith(404, { 'Content-Type': 'text/html' });
    expect(res.write).toHaveBeenCalledWith('<h1>This section doesn\'t exist</h1>');
    expect(res.end).toHaveBeenCalled();
  });
});

// Mocking examples
describe('mocking example', () => {
  test('mocks a function', () => {
    const mockFunction = jest.fn();
    mockFunction.mockReturnValue(42);

    expect(mockFunction()).toBe(42);
    expect(mockFunction).toHaveBeenCalled();
  });

  test('spies on an object method', () => {
    const user = {
      getName: function() {
        return 'John';
      }
    };

    const spy = jest.spyOn(user, 'getName');
    user.getName();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

// Asynchronous tests
describe('asynchronous tests', () => {
  test('async/await test', async () => {
    const fetchData = async () => 'data';
    const data = await fetchData();
    expect(data).toBe('data');
  });

  test('promise test', () => {
    return Promise.resolve('data').then(data => {
      expect(data).toBe('data');
    });
  });

  test('done callback', done => {
    function callback(data) {
      try {
        expect(data).toBe('data');
        done();
      } catch (error) {
        done(error);
      }
    }

    setTimeout(() => callback('data'), 100);
  });
});

// EXCEPTIONS
// toThrow
// toThrowError