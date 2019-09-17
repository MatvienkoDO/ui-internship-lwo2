const vowels = ['a', 'e', 'i', 'o', 'u'];

function isVowel(character) {
  return vowels.indexOf(character.toLowerCase()) !== -1;
}

/**
 * @description makes copy of this text and transforms it into pig-latin form
 * @param {string} text
 * @return {string}
 * @example translatePigLatin('glove') = 'oveglay'
 */
export function translatePigLatin(text) {
  const first = text[0];

  if (isVowel(first)) {
    return `${text}way`;
  }

  const textLength = text.length;
  for (let i = 0; i < textLength && !isVowel(text[0]); ++i) {
    text = text.slice(1) + text[0];
  }

  return `${text}ay`;
}
