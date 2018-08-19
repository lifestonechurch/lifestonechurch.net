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
  console.log(dates) ||
  dates.reduce(
    (firstDate, current) =>
      console.log(firstDate, current) || !firstDate
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
        : new Date(current.endDate) < new Date(lastDate)
          ? current.endDate
          : lastDate,
    null
  );

export default formatDate;
