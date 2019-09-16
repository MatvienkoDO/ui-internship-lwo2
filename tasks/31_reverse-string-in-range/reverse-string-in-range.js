export function reverseStringInRange(text, [start, inclusiveEnd]) {
  const end = inclusiveEnd + 1;

  const before = text.slice(0, start);
  const reversed = text.slice(start, end)
      .split('').reverse().join('');
  const after = text.slice(end);

  return before + reversed + after;
}
