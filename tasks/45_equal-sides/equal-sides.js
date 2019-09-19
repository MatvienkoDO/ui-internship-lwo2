export function findEqualIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((a, c) => a + c);

  for (let i = 0; i < arr.length; ++i) {
    leftSum += arr[i - 1] || 0;
    rightSum -= arr[i];

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}
