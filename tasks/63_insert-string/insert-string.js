/**
 * @description makes copy of 'str' with inserted 'insertable' at 'position'
 * @param {string} str string, in which 'insertable' will be inserted
 * @param {string} insertable string to insert
 * @param {number} position position to insert
 * @return {string} 'str' with inserted 'insertable' at position 'position'
 * @example insert('qwerty', 'W') -> 'Wqwerty'
 */
export function insert(str, insertable, position = 0) {
  const chars = [...str];
  chars.splice(position, 0, insertable);
  return chars.join('');
}
