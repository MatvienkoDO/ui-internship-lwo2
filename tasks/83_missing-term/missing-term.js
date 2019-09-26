/**
 * @description finds missing element in an Arithmetic Progression
 * @param {number[]} numbers array of numbers in an Arithmetic Progression
 * @return {number} missing number
 * @example findMissing([1, 3, 4]) -> 2
 */
export function findMissing(numbers) {
  let maxDiff = Math.abs(numbers[1] - numbers[0]);
  let maxDiffIndex = 0;

  for (let i = 1; i < numbers.length - 1; ++i) {
    const currentDiff = Math.abs(numbers[i + 1] - numbers[i]);

    if (currentDiff > maxDiff) {
      maxDiff = currentDiff;
      maxDiffIndex = i;
    }
  }

  return (numbers[maxDiffIndex] + numbers[maxDiffIndex + 1]) / 2;
}
