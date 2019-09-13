const vowels = ['a', 'e', 'i', 'o', 'u'];

export function getVowelCount(text) {
  return text
      .split('')
      .reduce(
          (a, c) => vowels.indexOf(c) !== -1 ? a + 1 : a,
          0
      );
}
