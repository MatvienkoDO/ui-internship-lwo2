export function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return '';
  }

  return str.repeat(num);
}
