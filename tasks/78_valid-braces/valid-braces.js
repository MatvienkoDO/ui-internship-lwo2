function getOpeningBrace(closingBrace) {
  switch (closingBrace) {
    case ')':
      return '(';
    case '}':
      return '{';
    case ']':
      return '[';
    default:
      return undefined;
  }
}

function isOpeningBrace(char) {
  return char === '(' || char === '[' || char === '{';
}

function isClosingBrace(char) {
  return char === ')' || char === ']' || char === '}';
}

/**
 * @description checks braces sequence
 * @param {string} braces sequence of braces
 * @return {boolean} whether braces sequence valid or not
 * @example '(){}[]' -> true
 */
export function validBraces(braces) {
  const chars = braces.split('');
  const openingBracesStack = [];

  for (const char of chars) {
    if (isOpeningBrace(char)) {
      openingBracesStack.push(char);
    } else if (isClosingBrace(char)) {
      const lastOpening = openingBracesStack.pop();
      const correspondingOpening = getOpeningBrace(char);

      if (lastOpening !== correspondingOpening) {
        return false;
      }
    }
  }

  return openingBracesStack.length === 0;
}
