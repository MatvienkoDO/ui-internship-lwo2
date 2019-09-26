function getNumberByDayName(name) {
  switch (name.toLowerCase()) {
    case 'mon': return 0;
    case 'tue': return 1;
    case 'wed': return 2;
    case 'thu': return 3;
    case 'fri': return 4;
    case 'sat': return 5;
    case 'sun': return 6;
    default: return undefined;
  }
}

/**
 * @description receives array of days and makes human-friendly representation
 * @param {object[]} days array of objects that represent days
 * @return {string[]} human-friendly schedule
 * @example {'day':'sat','from':'10:00','to':'23:00'} -> ['SAT: 10:00 - 23:00']
 */
export function formatWorkingHours(days) {
  const sortedDays = days
      .map((day) => ({
        day,
        number: getNumberByDayName(day.day),
      }))
      .sort((l, r) => l.number - r.number)
      .map(({day}) => day);

  const groupedDays = sortedDays
      .reduce((groups, day) => {
        if (groups.length === 0) {
          groups.push([day]);
          return groups;
        }

        const lastGroup = groups[groups.length - 1];
        const {from: lastGroupFrom, to: lastGroupTo} = lastGroup[0];

        if (day.from === lastGroupFrom && day.to === lastGroupTo) {
          lastGroup.push(day);
        } else {
          groups.push([day]);
        }

        return groups;
      }, []);

  const records = groupedDays
      .map((group) => {
        if (group.length === 1) {
          const single = group[0];
          return `${single.day.toUpperCase()}: ${single.from} - ${single.to}`;
        }

        const first = group[0];
        const last = group[group.length - 1];

        const days = `${first.day.toUpperCase()} - ${last.day.toUpperCase()}`;

        return `${days}: ${first.from} - ${first.to}`;
      });

  return records;
}
