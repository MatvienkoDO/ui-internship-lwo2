export function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  if (maxLength <= 3) {
    maxLength += 3;
  }

  return `${str.slice(0, maxLength - 3)}...`;
}
