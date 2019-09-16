/**
 * makes abbreviated form of name
 * @param {string} fullname
 * @return {string}
 */
export function abbreviated(fullname) {
  return fullname
      .split(' ')
      .map((part, index) => {
        if (index) {
          return `${part[0].toUpperCase()}.`;
        }

        return part;
      })
      .join(' ');
}
