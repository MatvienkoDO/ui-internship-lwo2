/**
 * @description finds missing letter in range
 * @param {string} letters string that represents range of letters
 * @return {string} missing letter
 * @example findLetter('abce') = 'd'
 */
export function findLetter(letters) {
  const length = letters.length;
  for (let i = 1; i < length; ++i) {
    const rightCode = letters.charCodeAt(i - 1) + 1;

    if (letters.charCodeAt(i) !== rightCode) {
      return String.fromCharCode(rightCode);
    }
  }

  return undefined;
}
