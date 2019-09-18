/**
 * @description encodes string as string of divided by spaces binary bytes
 * @param {string} str string to encode
 * @return {string} encoded string
 * @example 'bo' -> '00100000 01100010'
 */
export function binaryEncode(str = '') {
  return str
      .split('')
      .map((c) => {
        const code = c.charCodeAt(0);
        const binaryCode = code.toString(2);
        return '0'.repeat(8 - binaryCode.length) + binaryCode;
      })
      .join(' ');
}
