export function maxTripletSum(numbers, groupLength = 3) {
  const uniqueNumbers = [...new Set(numbers).values()];
  const sortedUnique = uniqueNumbers.sort((f, s) => s - f);
  const group = sortedUnique.slice(0, groupLength);

  return group.reduce((a, c) => a + c);
}
