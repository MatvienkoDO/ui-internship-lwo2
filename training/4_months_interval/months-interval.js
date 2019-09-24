const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * @description shows months in specified interval
 * @param {Date} one one boundary
 * @param {Date} another another boundary
 * @return {string[]} months in interval
 * @example new Date(2017, 0, 1), new Date(2017, 0, 1) -> ['January']
 */
export function monthsInterval(one, another) {
  const oneTimestamp = one.getTime();
  const anotherTimestamp = another.getTime();
  if (isNaN(oneTimestamp) || isNaN(anotherTimestamp)) {
    return [];
  }

  const first = new Date(Math.min(oneTimestamp, anotherTimestamp));
  const lastTimestamp = Math.max(oneTimestamp, anotherTimestamp);

  const monthsSet = {};

  while (first.getTime() <= lastTimestamp) {
    const month = first.getMonth();
    monthsSet[month] = true;
    first.setMonth(month + 1);
  }

  const lastMonth = new Date(lastTimestamp).getMonth();
  monthsSet[lastMonth] = true;

  return Object.keys(monthsSet)
      .sort((l, r) => l - r)
      .map((monthIndex) => months[monthIndex]);
}
