const getPrimeNumbers = (function() {
  function testNumberForPrime(number) {
    for (let i = 2; i * i <= number; ++i) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  const prime = [2];
  let lastTested = 2;

  function extendPrimeNumbersRow(upToAndEqual) {
    while (lastTested < upToAndEqual) {
      ++lastTested;

      if (testNumberForPrime(lastTested)) {
        prime.push(lastTested);
      }
    }
  }

  return function(upToAndEqual) {
    extendPrimeNumbersRow(upToAndEqual);

    return prime;
  };
})();

function decomposeInPrimeNumbersRow(number) {
  const primeNumbers = getPrimeNumbers(number);

  const result = [];

  while (number !== 1) {
    for (const prime of primeNumbers) {
      if (number % prime === 0) {
        result.push(prime);
        number /= prime;
        break;
      }
    }
  }

  return result;
}

/**
 * @description counts greatest common divisor
 * @param {number} first first number
 * @param {number} second second number
 * @return {number} greatest common divisor
 * @example (27, 21) -> 3
 */
export function greatestCommonDivisor(first, second) {
  const firstDecomposition = decomposeInPrimeNumbersRow(first);
  const secondDecomposition = decomposeInPrimeNumbersRow(second);

  const firstMap = firstDecomposition
      .reduce((a, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
      }, {});

  const secondMap = secondDecomposition
      .reduce((a, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
      }, {});

  let result = 1;
  for (const key in firstMap) {
    if (firstMap.hasOwnProperty(key) && secondMap.hasOwnProperty(key)) {
      const quantity = Math.min(firstMap[key], secondMap[key]);
      result *= Math.pow(key, quantity);
    }
  }

  return result;
}
