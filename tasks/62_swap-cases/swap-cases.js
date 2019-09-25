/**
 * @description swap cases of characters in specified string
 * @param {string} str
 * @return {string} string with swapped cases of characters
 * @example 'Hello, World' -> 'hELLO, wORLD'
 */
export function swapCases(str) {
  return [...str]
      .map((char) => {
        const upperCaseChar = char.toUpperCase();

        return char === upperCaseChar ? char.toLowerCase() : upperCaseChar;
      })
      .join('');
}
