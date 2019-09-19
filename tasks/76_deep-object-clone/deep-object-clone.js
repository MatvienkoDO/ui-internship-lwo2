/**
 * @description creates deep clone of specified object
 * @param {object} obj object to copy
 * @return {object} clone
 * @example {a:1, b:{c:10}} -> {a:1, b:{c:10}} object with other nested objects
 */
export function deepClone(obj) {
  const newObject = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        newObject[key] = deepClone(obj[key]);
      } else {
        newObject[key] = obj[key];
      }
    }
  }

  return newObject;
}
