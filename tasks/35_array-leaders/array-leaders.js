export function arrayLeaders(arr) {
  const leaders = [];

  let sum = 0;

  for (let i = arr.length - 1; i >= 0; --i) {
    const element = arr[i];

    if (element > sum) {
      leaders.unshift(element);
    }

    sum += element;
  }

  return leaders;
}
