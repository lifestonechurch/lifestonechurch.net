import * as formatDate from './formatDate';

test('adds 1 + 2 to equal 3', () => {
  expect(formatDate.formatDate('2018-01-01')).toBe('1/1/2018');
  expect(formatDate.formatDate('2018-12-31')).toBe('12/31/2018');
});
