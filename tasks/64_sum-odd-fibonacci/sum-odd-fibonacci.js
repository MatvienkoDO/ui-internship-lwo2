let fibSeqPrelast = 1;
let fibSeqLast = 1;
const oddFibSeq = [1, 1];

function prolongSequence(n) {
  while (fibSeqLast < n) {
    const next = fibSeqPrelast + fibSeqLast;

    if (next % 2) {
      oddFibSeq.push(next);
    }

    fibSeqPrelast = fibSeqLast;
    fibSeqLast = next;
  }
}

function sumOddFibSeqLessThanOrEqualToMax(max) {
  let sum = 0;

  const length = oddFibSeq.length;
  for (let i = 0; i < length && oddFibSeq[i] <= max; ++i) {
    sum += oddFibSeq[i];
  }

  return sum;
}

/**
 * @description counts sum of all odd fibonacci numbers less or equal to 'num'
 * @param {number} num most greatest
 * @return {number} sum of odd fibonacci numbers less or equal to 'num'
 * @example 5 -> 10 (1, 1, 3, 5)
 */
export function sumFibs(num) {
  prolongSequence(num);

  return sumOddFibSeqLessThanOrEqualToMax(num);
}
