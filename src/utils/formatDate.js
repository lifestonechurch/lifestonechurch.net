import { DateTime } from "luxon";

export default date => DateTime.fromISO(date).toLocaleString();
