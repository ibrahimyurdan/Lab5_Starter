import { sum } from '../code-to-unit-test/sum';

test('direct addition: adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('sum function: adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});