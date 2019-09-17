/**
 * filters collection on specific key-value set
 * @param {Array<object>} collection collection of objects to filter
 * @param {object} source key-value pairs to match
 * @return {Array<object>}
 */
export function whatIsInAName(collection, source) {
  const sourceOwnPropsKeys = Object.keys(source);

  return collection
      .filter((object) =>
        sourceOwnPropsKeys.every((key) => object[key] === source[key])
      );
}
