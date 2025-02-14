function isUpperCase(str) {
  return str === str.toUpperCase();
}

/**
 * @description replaces before on after with same case of first letter
 * @param {string} text text to generate new text with replaced tokens
 * @param {string} before token to find
 * @param {string} after token to replace found
 * @return {string}
 * @example myReplace('He is Sleeping', 'Sleeping', 'sitting') = 'He is Sitting'
 */
export function myReplace(text, before, after) {
  const firstLetter = isUpperCase(before[0])
    ? after[0].toUpperCase()
    : after[0].toLowerCase();

  after = firstLetter + after.slice(1);

  return text.replace(before, after);
}
