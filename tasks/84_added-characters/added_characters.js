/**
 * @description returns character that was added with repetition
 * @param {string} text initial text
 * @param {string} withAdded text with added three same chars
 * @return {string} char that was added with repetition
 * @example ('aabbcc', 'aacccbbcc') -> 'c'
 */
export function addedChar(text, withAdded) {
  const withAddedChars = withAdded.split('');

  for (const char of text) {
    const index = withAddedChars.indexOf(char);
    withAddedChars.splice(index, 1);
  }

  return withAddedChars[0];
}
