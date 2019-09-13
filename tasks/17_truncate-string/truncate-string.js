export function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str.slice();
  }

  const substrLength = maxLength > 3 ? maxLength - 3 : maxLength;

  return str
      .slice(0, substrLength)
      .padEnd(substrLength + 3, '.');
}
