const combinations = [
  (f, s, t) => f * s * t,
  (f, s, t) => f * s + t,
  (f, s, t) => f * (s + t),
  (f, s, t) => f + s * t,
  (f, s, t) => (f + s) * t,
  (f, s, t) => f + s + t,
];

/**
 * @description finds maximum result of expression
 * that consists of 3 numbers, signs +, * and brackets
 * @param {number} f first number
 * @param {number} s second number
 * @param {number} t third number
 * @return {number} maximum result
 * @example expressionMatter(2, 1, 2) -> 6
 */
export function expressionMatter(f, s, t) {
  const results = combinations
      .map((combination) => combination(f, s, t));

  return Math.max(...results);
}
