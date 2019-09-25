/**
 * @description returns corresponding acid or undefined in case of wrong letter
 * @param {string} a letter that means acid
 * @return {string|undefined} corresponding acid
 * @example 'A' -> 'T'
 */
export function findCorresponding(a) {
  switch (a.toUpperCase()) {
    case 'A':
      return 'T';
    case 'T':
      return 'A';
    case 'C':
      return 'G';
    case 'G':
      return 'C';
    default:
      return undefined;
  }
}

/**
 * @description receives sequence of acids and returns pairs of acids
 * @param {string} sequence sequence of acids as letters
 * @return {Array<Array<string>>} pairs of acids
 * @example 'AT' -> [['A','T'],['T','A']]
 */
export function pairElement(sequence = '') {
  return sequence
      .split('')
      .map((c) => [c, findCorresponding(c)]);
}
