const vowels = ['a', 'e', 'i', 'o', 'u'];

export function getVowelCount(text) {
  return text
      .split('')
      .filter((c) => vowels.indexOf(c) !== -1)
      .length;
}
