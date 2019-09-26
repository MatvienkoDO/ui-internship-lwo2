/**
 * @typedef {{
 *  date: string,
 *  name: string
 * }} Event
 * @description finds event closest to specified date and returns its name
 * @param {Event[]} events
 * @param {Date} date
 * @return {string} name of closest event
 */
export function closestEvent(events, date) {
  const targetTimestamp = date.getTime();
  if (isNaN(targetTimestamp)) {
    return undefined;
  }

  const eventsWithTimestamps = events
      .map(({date, name}) => ({
        timestamp: new Date(date).getTime(),
        name,
      }))
      .filter(({timestamp}) => timestamp);

  if (!eventsWithTimestamps.length) {
    return undefined;
  }
  if (eventsWithTimestamps.length === 1) {
    return eventsWithTimestamps[0].name;
  }

  const eventsWithDifferences = eventsWithTimestamps
      .map(({timestamp, name}) => ({
        difference: Math.abs(timestamp - targetTimestamp),
        name,
      }));

  const closestEvent = eventsWithDifferences
      .reduce((closest, current) => {
        if (current.difference < closest.difference) {
          return current;
        }

        return closest;
      });

  return closestEvent.name;
}
