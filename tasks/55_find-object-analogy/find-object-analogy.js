/**
 * @description filters collection on specific key-value set
 * @param {Array<object>} collection collection of objects to filter
 * @param {object} source key-value pairs to match
 * @return {Array<object>} objects that corresponds requirements
 * @example whatIsInAName([{ 'a': 1 }, { 'b': 2 }], { 'a': 1 }) = [{ 'a': 1 }]
 */
export function whatIsInAName(collection, source) {
  const sourceOwnPropsKeys = Object.keys(source);

  return collection
      .filter((object) =>
        sourceOwnPropsKeys.every((key) => object[key] === source[key])
      );
}
