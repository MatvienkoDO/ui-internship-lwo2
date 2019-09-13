export function firstNSmallest(numbers, n) {
  return numbers
      .map((value, index) => ({
        index,
        value,
      }))
      .sort((l, r) => l.value - r.value)
      .slice(0, n)
      .sort((l, r) => l.index - r.index)
      .map(({value}) => value);
}
