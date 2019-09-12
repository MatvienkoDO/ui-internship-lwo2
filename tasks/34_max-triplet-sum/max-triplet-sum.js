export function maxTripletSum(numbers, groupLength = 3) {
  // eslint-disable-next-line no-undef
  const uniqueNumbersIterator = new Set(numbers).values();

  const group = [];
  let groupSum = 0;
  for (let i = 0; i < groupLength; ++i) {
    const element = uniqueNumbersIterator.next().value;
    group.push(element);
    groupSum += element;
  }

  let maxSum = groupSum;

  for (const number of uniqueNumbersIterator) {
    groupSum -= group.shift();
    group.push(number);
    groupSum += number;

    maxSum = Math.max(maxSum, groupSum);
  }

  return maxSum;
}
