export function stringExpansion(text) {
  return text
      .split('')
      .reduce((a, c) => {
        const number = Number(c);

        if (isNaN(number)) {
          a.result += c.repeat(a.number);
        } else {
          a.number = number;
        }

        return a;
      }, {
        result: '',
        number: 1,
      })
      .result;
}
