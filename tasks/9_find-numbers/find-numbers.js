export function getNumbers(str) {
  const regexResult = str.match(/\d/g);

  return (regexResult || []).map(Number);
}
