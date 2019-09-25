function isPrime(n) {
  for (let i = 2; i * i <= n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

const primeNumbers = [2];

function prolongPrimeNumbersRow(num) {
  for (let i = primeNumbers[primeNumbers.length - 1] + 1; i <= num; ++i) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
}

/**
 * @description sums all prime numbers below 'num' and 'num', if it is prime too
 * @param {number} num max number in row
 * @return {number} sum of all suitable numbers
 * @example 5 (2, 3, 5) -> 10
 */
export function sumPrimes(num) {
  prolongPrimeNumbersRow(num);

  return primeNumbers
      .filter((n) => n <= num)
      .reduce((a, c) => a + c, 0);
}
