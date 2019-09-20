/**
 * @description performs addition of inventories
 * @param {Array<Array<number|string>>} curInv current inventory
 * @param {Array<Array<number|string>>} newInv new inventory
 * @return {Array<Array<number|string>>}
 * @example [[1,'q'],[2,'w']],[[3,'q']] -> [[4,'q'],[2,'w']]
 */
export function updateInventory(curInv, newInv) {
  const inventoryMap = {};

  for (const [number, name] of curInv) {
    inventoryMap[name] = number;
  }

  for (const [number, name] of newInv) {
    inventoryMap[name] = (inventoryMap[name] || 0) + number;
  }

  return Object.entries(inventoryMap)
      .sort(([leftName], [rightName]) => leftName <= rightName ? -1 : 1)
      .map(([name, number]) => [number, name]);
}
