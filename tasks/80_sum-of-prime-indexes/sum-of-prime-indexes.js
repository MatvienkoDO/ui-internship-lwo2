function checkNumberForPrime(n) {
  for (let i = 2; i * i <= n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

const primeNumbers = [2];
let lastTested = 2;

function prolongPrimeNumbersRow(number) {
  while (lastTested < number) {
    ++lastTested;

    if (checkNumberForPrime(lastTested)) {
      primeNumbers.push(lastTested);
    }
  }
}

/**
 * @description sums elements in array with prime indexes
 * @param {number[]} array array of any elements to sum
 * @return {number} sum of elements with prime indexes
 * @example sumPrimeIndexedElements([1, 2, 3, 4]) -> 7 (3 + 4, 2 and 3 indexes)
 */
export function sumPrimeIndexedElements(array) {
  const lastIndex = array.length - 1;
  prolongPrimeNumbersRow(lastIndex);

  let sum = 0;
  for (const prime of primeNumbers) {
    if (prime > lastIndex) {
      break;
    }

    sum += array[prime];
  }

  return sum;
}
