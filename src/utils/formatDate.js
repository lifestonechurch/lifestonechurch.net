import { DateTime } from "luxon";

export const longFormatDate = date => DateTime.fromISO(date).toLocaleString();

export const shortFormatDate = date =>
  DateTime.fromISO(date).toFormat("LLL dd");

export const getMonthNumber = date =>
  Number(DateTime.fromISO(date).toFormat("L"));

export const getMonthName = date => DateTime.fromISO(date).toFormat("LLLL");

export default longFormatDate;
