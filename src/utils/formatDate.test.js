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

describe('getFutureEvents', () => {
  const { getFutureEvents } = formatDate;
  const OriginalDate = Date;

  beforeAll(() => {
    const fakeToday = new Date(2018, 0, 1);
    Date = (...args) => (args.length ? new OriginalDate(...args) : fakeToday);
  });

  afterAll(() => {
    Date = OriginalDate;
  });

  const createMockNode = keys => ({
    node: {
      fields: {
        slug: 'slug',
      },
      ...keys,
    },
  });

  const eventWithFutureEndDate = createMockNode({
    id: 'eventWithFutureEndDate',
    startDate: '2018-01-01',
    endDate: '2018-01-02',
  });

  const eventWithPastEndDate = createMockNode({
    id: 'eventWithPastEndDate',
    startDate: '2017-01-01',
    endDate: '2017-01-02',
  });

  const eventWithNoEndDateAndFutureStartDate = createMockNode({
    id: 'eventWithNoEndDateAndFutureStartDate',
    startDate: '2018-01-02',
    endDate: null,
  });

  const eventWithNoEndDateAndPastStartDate = createMockNode({
    id: 'eventWithNoEndDateAndPastStartDate',
    startDate: '2017-01-02',
    endDate: null,
  });

  const eventWithNoStartOrEndDateAndFutureRegistration = createMockNode({
    id: 'eventWithNoStartOrEndDateAndFutureRegistration',
    dateAndRegistration: [
      {
        endDate: '2018-01-02',
      },
    ],
    startDate: null,
    endDate: null,
  });

  const eventWithNoStartOrEndDateAndPastRegistration = createMockNode({
    id: 'eventWithNoStartOrEndDateAndPastRegistration',
    dateAndRegistration: [
      {
        endDate: '2017-01-02',
      },
    ],
    startDate: null,
    endDate: null,
  });

  describe('when events have an end date', () => {
    test('it should return events with an end date that is in the future', () => {
      const testEvents = [eventWithFutureEndDate];

      const futureEvents = getFutureEvents(testEvents);
      expect(futureEvents).toHaveLength(1);
      expect(futureEvents[0].id).toBe(testEvents[0].node.id);
    });

    test('it should not return events with an end date that is in the past', () => {
      const testEvents = [eventWithPastEndDate];

      const futureEvents = getFutureEvents(testEvents);
      expect(futureEvents).toHaveLength(0);
    });
  });

  describe('when events have a start date, but no end date', () => {
    test('it should return events with a start date that is in the future', () => {
      const testEvents = [eventWithNoEndDateAndFutureStartDate];

      const futureEvents = getFutureEvents(testEvents);
      expect(futureEvents).toHaveLength(1);
      expect(futureEvents[0].id).toBe(testEvents[0].node.id);
    });

    test('it should not return events with a start date that is in the past', () => {
      const testEvents = [eventWithNoEndDateAndPastStartDate];

      const futureEvents = getFutureEvents(testEvents);
      expect(futureEvents).toHaveLength(0);
    });
  });

  describe('when an event has no end or start date, but has registration dates', () => {
    test('it should return events with a registration date that is in the future', () => {
      const testEvents = [eventWithNoStartOrEndDateAndFutureRegistration];

      const futureEvents = getFutureEvents(testEvents);
      expect(futureEvents).toHaveLength(1);
      expect(futureEvents[0].id).toBe(testEvents[0].node.id);
    });

    test('it should not return events with a registration date that is in the past', () => {
      const testEvents = [eventWithNoStartOrEndDateAndPastRegistration];

      const futureEvents = getFutureEvents(testEvents);
      expect(futureEvents).toHaveLength(0);
    });
  });

  describe('data transformation', () => {
    test('it preserves extra keys in the node', () => {
      const testEvents = [
        {
          node: {
            ...eventWithFutureEndDate.node,
            extraKey: 'extraKey',
          },
        },
      ];

      const futureEvents = getFutureEvents(testEvents);
      expect(futureEvents[0].extraKey).toBe(testEvents[0].node.extraKey);
    });

    test('it sets startDate to the startDate if it exists', () => {
      const testEvents = [eventWithNoEndDateAndFutureStartDate];

      const futureEvents = getFutureEvents(testEvents);
      expect(futureEvents[0].startDate).toBe(testEvents[0].node.startDate);
    });

    test('it sets startDate to the earliest registration date if there is no start date', () => {
      const earliestStartDate = '2018-01-01';

      const testEvents = [
        createMockNode({
          ...eventWithFutureEndDate.node,
          dateAndRegistration: [
            {
              startDate: '2018-01-02',
            },
            {
              startDate: earliestStartDate,
            },
          ],
        }),
      ];

      const futureEvents = getFutureEvents(testEvents);
      expect(futureEvents[0].startDate).toBe(earliestStartDate);
    });

    test('it brings fields.slug to the top level', () => {
      const slug = 'fields.slug';

      const testEvents = [
        createMockNode({
          ...eventWithFutureEndDate.node,
          fields: {
            slug,
          },
        }),
      ];

      const futureEvents = getFutureEvents(testEvents);
      expect(futureEvents[0].slug).toBe(slug);
    });
  });

  describe('sorting', () => {
    test('it sorts returned events by start date, ascending', () => {
      const newestEventId = 'newestEventId';
      const oldestEventId = 'oldestEventId';

      const testEvents = [
        createMockNode({
          ...eventWithFutureEndDate.node,
          id: newestEventId,
          startDate: '2018-01-01',
        }),
        createMockNode({
          ...eventWithFutureEndDate.node,
          id: oldestEventId,
          startDate: '2017-01-01',
        }),
      ];

      const futureEvents = getFutureEvents(testEvents);
      expect(futureEvents[0].id).toBe(oldestEventId);
      expect(futureEvents[1].id).toBe(newestEventId);
    });
  });
});
