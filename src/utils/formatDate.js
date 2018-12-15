import { DateTime } from 'luxon';

export const formatDate = date => DateTime.fromISO(date).toLocaleString();

export const longFormatDate = date =>
  DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);

export const shortFormatDate = date => DateTime.fromISO(date).toFormat('LLL d');

export const getMonthNumber = date =>
  Number(DateTime.fromISO(date).toFormat('L'));

export const getMonthName = date => DateTime.fromISO(date).toFormat('LLLL');

export const getDayOfWeek = date => DateTime.fromISO(date).toFormat('cccc');

export const getFirstStartDate = dates =>
  dates.reduce(
    (firstDate, current) =>
      !firstDate
        ? current.startDate
        : new Date(current.startDate) < new Date(firstDate)
          ? current.startDate
          : firstDate,
    null
  );

export const getLastEndDate = dates =>
  dates.reduce(
    (lastDate, current) =>
      !lastDate
        ? current.endDate
        : new Date(current.endDate) > new Date(lastDate)
          ? current.endDate
          : lastDate,
    null
  );

export const getFutureEvents = events => {
  const q = new Date();
  const m = q.getMonth();
  const d = q.getDate();
  const y = q.getFullYear();

  const today = new Date(y, m, d);

  return events
    .filter(
      ({ node }) =>
        node.endDate
          ? DateTime.fromFormat(node.endDate, 'yyyy-LL-dd').toJSDate() >= today
          : node.startDate
            ? DateTime.fromFormat(node.startDate, 'yyyy-LL-dd').toJSDate() >=
              today
            : node.dateAndRegistration &&
              DateTime.fromFormat(
                getLastEndDate(node.dateAndRegistration),
                'yyyy-LL-dd'
              ).toJSDate() >= today
    )
    .map(({ node }) => ({
      ...node,
      startDate: node.startDate || getFirstStartDate(node.dateAndRegistration),
      slug: node.fields.slug,
    }))
    .sort((a, b) => new Date(a.startDate) > new Date(b.startDate));
};

export const getCalendarFormat = (date, time) => {
  if (time) {
    const formatDate = !time ? 'yyyy-MM-dd' : 'yyyy-MM-dd h:mma';
    const inputDate = !time ? date : `${date} ${time}`;
    const isoFormat = DateTime.fromFormat(inputDate, formatDate).toISO();
    return isoFormat.split('.')[0].replace(/:|-/g, '');
  } else {
    return DateTime.fromISO(date).toFormat('yyyyMMdd');
  }
};

export const getCalendarURl = (
  startDate,
  endDate,
  startTime,
  endTime,
  name
) => {
  let dateStart;
  let dateEnd;

  if (startTime) {
    dateStart = getCalendarFormat(startDate, startTime);
  } else {
    dateStart = getCalendarFormat(startDate, null);
  }
  if (endTime) {
    dateEnd =
      !endTime && startTime
        ? getCalendarFormat(endDate || startDate, startTime)
        : getCalendarFormat(endDate || startDate, endTime);
  } else {
    dateEnd = getCalendarFormat(endDate || startDate, null);
  }

  return `http://www.google.com/calendar/event?action=TEMPLATE&text=${name}&dates=${dateStart}/${dateEnd}`;
};

export default formatDate;
