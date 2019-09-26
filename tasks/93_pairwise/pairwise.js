/**
 * @description counts sum of pairs indexes
 * @param {number[]} arr numbers
 * @param {number} arg sum of indexes in pair
 * @return {number} sum of pairs indexes
 * @example pairwise([1, 3, 2, 4], 4) -> 1
 */
export function pairwise(arr, arg) {
  let elements = arr.map((value, index) => ({value, index}));

  let sum = 0;

  for (let i = 0; i < elements.length; ++i) {
    for (let j = i + 1; j < elements.length; ++j) {
      const {value: fValue, index: fIndex} = elements[i];
      const {value: sValue, index: sIndex} = elements[j];

      if (fValue + sValue === arg) {
        sum += fIndex + sIndex;
        elements = elements
            .filter(({index}) => index !== fIndex && index !== sIndex);
        --i;
        break;
      }
    }
  }

  return sum;
}
