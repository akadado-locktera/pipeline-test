const sum = require('../src/index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 5 - 4 to equal 1', () => {
    expect(sum.subtract(5, 4)).toBe(1);
});

test('multiplies 5 * 5 to equal 25', () => {
expect(sum(5, 5)).toBe(25);
});

test('adds 1 + 2 to equal 3', () => {
expect(sum(1, 2)).toBe(4);
});
