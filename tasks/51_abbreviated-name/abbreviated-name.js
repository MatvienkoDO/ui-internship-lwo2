/**
 * @description makes abbreviated form of name
 * @param {string} fullname
 * @return {string} abbreviated fullname
 * @example abbreviated('Miller Robin Robin') = 'Miller R. R.'
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
