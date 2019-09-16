export function checkLetters([first, second]) {
  first = first.toLowerCase();
  second = second.toLowerCase();

  return second
      .split('')
      .every((character) => first.indexOf(character) !== -1);
}
