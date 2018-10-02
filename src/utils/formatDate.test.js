import * as formatDate from './formatDate';

describe('formatDate', () => {
  test('it should format "2018-01-01" as "1/1/2018"', () => {
    expect(formatDate.formatDate('2018-01-01')).toBe('1/1/2018');
  });
  test('it should format "2018-12-31" as "12/31/2018"', () => {
    expect(formatDate.formatDate('2018-12-31')).toBe('12/31/2018');
  });
});

describe('longFormatDate', () => {
  test('it should format 2018-12-31 as "December 31, 20018"', () => {
    const testDate = new Date('2018-12-31:00:00:00').toISOString();
    expect(formatDate.longFormatDate(testDate)).toBe('December 31, 2018');
  });
});

describe('getMonthNumber', () => {
  test('it should return 12 for 2018-12-31', () => {
    const testDate = new Date('2018-12-31:00:00:00').toISOString();
    expect(formatDate.getMonthNumber(testDate)).toBe(12);
  });
});

describe('getMonthName', () => {
  test('it should return December for 2018-12-31', () => {
    const testDate = new Date('2018-12-31:00:00:00').toISOString();
    expect(formatDate.getMonthName(testDate)).toBe('December');
  });
});

describe('getDayOfWeek', () => {
  test('it should return Monday for 2018-12-31', () => {
    const testDate = new Date('2018-12-31:00:00:00').toISOString();
    expect(formatDate.getDayOfWeek(testDate)).toBe('Monday');
  });
});

describe('getFirstStartDate', () => {
  test('it should return 2018-12-28 for 28, 29, 30, 31 of December 2018', () => {
    const testDate28 = {
      startDate: new Date('2018-12-28:00:00:00').toISOString(),
    };
    const testDate29 = {
      startDate: new Date('2018-12-29:00:00:00').toISOString(),
    };
    const testDate30 = {
      startDate: new Date('2018-12-30:00:00:00').toISOString(),
    };
    const testDate31 = {
      startDate: new Date('2018-12-31:00:00:00').toISOString(),
    };
    expect(
      formatDate.getFirstStartDate([
        testDate28,
        testDate29,
        testDate30,
        testDate31,
      ])
    ).toEqual(testDate28.startDate);
  });
});

describe('getLastEndDate', () => {
  test('it should return 2018-12-31 for 28, 29, 30, 31 of December 2018', () => {
    const testDate28 = {
      endDate: new Date('2018-12-28:00:00:00').toISOString(),
    };
    const testDate29 = {
      endDate: new Date('2018-12-29:00:00:00').toISOString(),
    };
    const testDate30 = {
      endDate: new Date('2018-12-30:00:00:00').toISOString(),
    };
    const testDate31 = {
      endDate: new Date('2018-12-31:00:00:00').toISOString(),
    };
    expect(
      formatDate.getLastEndDate([
        testDate28,
        testDate29,
        testDate30,
        testDate31,
      ])
    ).toEqual(testDate28.endDate);
  });
});
