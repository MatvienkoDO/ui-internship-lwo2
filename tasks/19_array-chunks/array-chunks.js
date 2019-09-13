export function arrayChunks(arr, groupLength) {
  return arr.reduce((accumulator, current, index) => {
    const numberInGroup = index % groupLength;

    if (numberInGroup === 0) {
      accumulator.push([]);
    }

    accumulator[accumulator.length - 1].push(current);

    return accumulator;
  }, []);
}
