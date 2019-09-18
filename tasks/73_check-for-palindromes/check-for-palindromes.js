export function palindrome(str) {
  const clean = (str.match(/[a-zA-Z\d]+/g) || [])
      .join('')
      .toLowerCase();

  const length = clean.length;
  const traverse = Math.floor(length / 2);
  for (let i = 0; i < traverse; ++i) {
    if (clean[i] !== clean[length - 1 - i]) {
      return false;
    }
  }

  return true;
}
