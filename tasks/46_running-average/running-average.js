export function runningAverage() {
  let sum = 0;
  let quantity = 0;

  return (newNumber) => {
    sum += newNumber;
    ++quantity;
    return sum / quantity;
  };
}
