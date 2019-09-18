/**
 * @description receives array of elements or arrays of elements and flattens it
 * @param {any[]} arr array of elements or arrays of elements
 * @return {any[]} flattened array
 * @example [1,[2,[3]]] -> [1,2,3]
 */
export function unpackArray(arr) {
  arr = arr.slice();

  const thereAreArrays = () =>
    arr.some((e) => Array.isArray(e));

  while (thereAreArrays()) {
    arr = arr
        .reduce((a, c) => {
          if (Array.isArray(c)) {
            return a.concat(c);
          }

          a.push(c);

          return a;
        }, []);
  }

  return arr;
}
