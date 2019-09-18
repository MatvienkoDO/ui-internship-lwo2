/**
 * @description decodes string from binary representation
 * @param {string} binary string in binary representation
 * @return {string} decoded string
 * @example '01010010 01100101' -> 'Re'
 */
export function binaryDecode(binary = '') {
  return binary
      .split(' ')
      .map((b) => {
        const code = parseInt(b, 2);
        return String.fromCharCode(code);
      })
      .join('');
}
