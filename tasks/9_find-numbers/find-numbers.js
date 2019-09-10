export function getNumbers(str) {
  const regexResult = str.match(/\d/g);

  const numbers = (regexResult || [])
      .map(Number)
      .filter((n) => !isNaN(n));

  return numbers;
}
