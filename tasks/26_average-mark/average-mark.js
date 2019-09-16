export function getAverage(marks) {
  const sum = marks.reduce((a, c) => a + c);
  return Math.floor(sum / marks.length);
}
