const { calculate, sum } = require('./server');

test('Add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Add 1 + 2 to equal 3', () => {
    expect(calculate(1, 2, String("add"))).toBe(3);
});
