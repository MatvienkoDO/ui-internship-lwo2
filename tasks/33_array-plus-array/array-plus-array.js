export function arrayPlusArray(first, second) {
  const length = Math.max(first.length, second.length);

  const result = [];

  for (let i = 0; i < length; ++i) {
    const firstValue = first[i] || 0;
    const secondValue = second[i] || 0;

    result.push(firstValue + secondValue);
  }

  return result;
}
