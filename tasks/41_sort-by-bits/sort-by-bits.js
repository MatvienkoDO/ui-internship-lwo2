export function sortByBits(numbers) {
  const numbersWithSumOfBits = numbers
      .map((number) => {
        const sumOfBits = number
            .toString(2)
            .split('')
            .filter((digit) => digit === '1')
            .length;

        return {
          sumOfBits,
          number,
        };
      });

  return numbersWithSumOfBits
      .sort((l, r) => {
        return l.sumOfBits === r.sumOfBits
            ? l.number - r.number
            : l.sumOfBits - r.sumOfBits;
      })
      .map(({number}) => number);
}
