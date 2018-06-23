import { DateTime } from 'luxon';

export const formatDate = date => DateTime.fromISO(date).toLocaleString();

export const longFormatDate = date =>
  DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);

export const shortFormatDate = date => DateTime.fromISO(date).toFormat('LLL d');

export const getMonthNumber = date =>
  Number(DateTime.fromISO(date).toFormat('L'));

export const getMonthName = date => DateTime.fromISO(date).toFormat('LLLL');

export default formatDate;
