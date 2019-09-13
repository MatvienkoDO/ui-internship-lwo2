export function titleCase(text) {
  return text
      .split(' ')
      .map((word) => {
        const firstSymbol = word[0].toUpperCase();
        const rest = word.substring(1).toLowerCase();

        return firstSymbol + rest;
      })
      .join(' ');
}
