export function largestOfFour(arrayOfArrays) {
  return arrayOfArrays
      .map((array) => Math.max(...array));
}
