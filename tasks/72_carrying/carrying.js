function isValidNumber(n) {
  return typeof n === 'number' && !Number.isNaN(n) && Number.isFinite(n);
}

/**
 * @description returns sum of numbers or
 * function that sums anything to specified number
 * @param {number} first first number to add
 * @param {any} second second number to add
 * @return {number|function(second: number): number}
 * @example addTogether(1) -> addToOne; addToOne(2) -> 3
 */
export function addTogether(first, second) {
  if (isValidNumber(first)) {
    if (isValidNumber(second)) {
      return first + second;
    }

    if (second === undefined) {
      return (s) => {
        if (isValidNumber(s)) {
          return first + s;
        }

        return undefined;
      };
    }
  }

  return undefined;
}
