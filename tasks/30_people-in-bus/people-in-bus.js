export function peopleInBus(stops) {
  return stops.reduce((a, c) => a + c[0] - c[1], 0);
}
