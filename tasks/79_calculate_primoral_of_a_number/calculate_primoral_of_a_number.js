function isPrime(n) {
  for (let i = 2; i * i <= n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

const primeNumbers = [2];
let lastTested = 2;

function prolongPrimeNumbersRow(requiredQuantity) {
  while (primeNumbers.length < requiredQuantity) {
    ++lastTested;

    if (isPrime(lastTested)) {
      primeNumbers.push(lastTested);
    }
  }
}

/**
 * @description counts primorial of n by multiplying n prime numbers
 * @param {number} n number of prime numbers to multiply
 * @return {number} primorial of n
 * @example numPrimorial(3) -> 30
 */
export function numPrimorial(n) {
  prolongPrimeNumbersRow(n);

  return primeNumbers
      .slice(0, n)
      .reduce((a, c) => a * c);
}
