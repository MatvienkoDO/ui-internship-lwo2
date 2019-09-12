// eslint-disable-next-line no-undef
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

export function getVowelCount(text) {
  return text
      .split('')
      .reduce(
          (a, c) => vowels.has(c) ? a + 1 : a,
          0
      );
}
