/**
 * @description counts symmetric difference of arrays
 * @param  {...any} arrays
 * @return {number[]} symmetric difference of arrays
 * @example ([1,2,3],[4,2,3]) -> [1,4]
 */
export function sym(...arrays) {
  const sets = arrays.map((array) => new Set(array));

  const map = {};

  for (const set of sets) {
    for (const number of set) {
      map[number] = (map[number] || 0) + 1;
    }
  }

  return Object.entries(map)
      .filter(([_, value]) => value === 1)
      .map(([key]) => Number(key))
      .sort((l, r) => l - r);
}
