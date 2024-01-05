export function convertDateToUnixTimestamp(date) {
  return Math.floor(date.getTime() / 1000);
}

export function convertUnixTimestampToDate(date) {
  return new Date(date * 1000).toLocaleDateString();
}

export function createDate({ date, days, weeks, months, years }) {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate + days + weeks * 7);
  newDate.setMonth(newDate.getMonth + months);
  newDate.setFullYear(newDate.getFullYear + years);

  return newDate;
}
