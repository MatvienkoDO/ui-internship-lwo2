export function arrayChunks(arr, groupLength) {
  const result = [];

  arr.forEach((element, index) => {
    const groupNumber = Math.floor(index / groupLength);
    const numberInGroup = index % groupLength;

    if (numberInGroup === 0) {
      result.push([]);
    }

    result[groupNumber][numberInGroup] = element;
  });

  return result;
}
