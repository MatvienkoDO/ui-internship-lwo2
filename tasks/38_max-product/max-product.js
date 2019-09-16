export function maxProduct(numbers) {
  const numbersIterator = numbers.values();

  const first = numbersIterator.next().value;
  let last = numbersIterator.next().value;
  let max = first * last;

  for (const number of numbersIterator) {
    max = Math.max(max, last * number);
    last = number;
  }

  return max;
}
