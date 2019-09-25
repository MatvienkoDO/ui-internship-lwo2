const wordRegexp = /([A-Z][a-z]*|[a-z]+)/g;

/**
 * @description normilizes string in spinal-case form
 * @param {string} text string that consists of unnormalized words
 * @return {string} text in form of spinal-case
 * @example spinalCase('This Is Spinal Tap') = 'this-is-spinal-tap'
 */
export function spinalCase(text) {
  const words = text.match(wordRegexp) || [];

  return words
      .join('-')
      .toLowerCase();
}
