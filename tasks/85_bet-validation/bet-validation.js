const invalidMessage = 'None';

/**
 * @description checks message and retrieves ordered numbers in case of success
 * @param {number[]} param0 array of 2 numbers: quantity of numbers and max
 * @param {string} message
 * @return {number[]|'None'} ordered numbers or 'None' string
 * @example validate_bet([5, 90], "5 , 3, 1  4,2") -> [1, 2, 3, 4, 5]
 */
// eslint-disable-next-line camelcase
export function validate_bet([quantity, max], message) {
  const allCharactersAreRight = message
      .split('')
      .every((c) => /\d/.test(c) || c === ' ' || c === ',');

  if (!allCharactersAreRight) {
    return invalidMessage;
  }

  const numbersStrings = (message.match(/\d+/g) || []);
  if (numbersStrings.length !== quantity) {
    return invalidMessage;
  }

  const numbers = numbersStrings
      .map(Number)
      .sort((l, r) => l - r);

  if (numbers[0] < 1 || max < numbers[numbers.length - 1]) {
    return invalidMessage;
  }

  return numbers;
}
