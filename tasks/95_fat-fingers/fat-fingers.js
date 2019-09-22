function reverseCapitalization(char) {
  const upperCaseChar = char.toUpperCase();
  return char === upperCaseChar ? char.toLowerCase() : upperCaseChar;
}

/**
 * @description makes text with mistakes from right text
 * @param {string} text right text
 * @return {string} wrong text
 * @example 'abABaBabAb' -> 'BBbbB'
 */
export function fatFingers(text) {
  const initialAccumulator = {
    result: '',
    caps: false,
  };

  return [...text]
      .reduce((a, c) => {
        if (c === 'a' || c === 'A') {
          a.caps = !a.caps;
        } else {
          a.result += a.caps ? reverseCapitalization(c) : c;
        }

        return a;
      }, initialAccumulator)
      .result;
}
