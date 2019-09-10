export function titleCase(text) {
  return text
      .split(' ')
      .map((word) => {
        const firstSymbol = word.substr(0, 1).toUpperCase();
        const rest = word.substr(1).toLowerCase();

        return `${firstSymbol}${rest}`;
      })
      .join(' ');
}
