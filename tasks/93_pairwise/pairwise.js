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
