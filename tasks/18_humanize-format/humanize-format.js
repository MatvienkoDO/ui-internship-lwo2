export function humanizeFormat(num) {
  if (typeof num === 'number' && !isNaN(num) && Number.isFinite(num)) {
    // right number, continiue work
  } else {
    return '';
  }

  const lastDigit = num % 10;

  switch (lastDigit) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}
