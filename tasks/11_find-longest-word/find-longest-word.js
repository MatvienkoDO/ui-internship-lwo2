export function findLongestWord(text) {
  const lengths = text
      .split(' ')
      .map((word) => word.length);

  return Math.max(...lengths);
}
