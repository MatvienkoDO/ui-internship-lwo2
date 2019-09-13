export function findCloseIndex(expression, index) {
  if (expression[index] !== '(') {
    return -1;
  }

  for (let i = index + 1, level = 0; i < expression.length; ++i) {
    if (expression[i] === '(') {
      ++level;
    } else if (expression[i] === ')') {
      if (level === 0) {
        return i;
      }

      --level;
    }
  }

  return -1;
}
