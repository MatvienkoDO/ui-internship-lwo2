export function numberToReversedArray(num) {
  return num
      .toString()
      .split('')
      .map(Number)
      .reverse();
}
