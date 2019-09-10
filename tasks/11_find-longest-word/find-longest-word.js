// solution with usage of all suggested functions
export function findLongestWord(text) {
  const max = text
      .split(' ')
      .map((word) => word.length)
      .reduce((acc, curr) => {
        return Math.max(acc, curr);
      });

  return max;
}

/* solution without reduce
export function findLongestWord(text) {
  const lengths = text
      .split(' ')
      .map((word) => word.length);

  return Math.max(...lengths);
}*/
