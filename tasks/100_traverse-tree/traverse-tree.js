/**
 * @typedef {{
 *  value: any,
 *  children: Node[]
 * }} Node
 * @description performs breadth-first traverse of specified tree
 * @param {Node} rootNode root of the tree
 * @param {function({value: any}): void} cb callback
 * that will be called on each node
 * @return {void}
 * @example
 *      1
 *  2       3
 * 4 5
 * cb({value: 1}),cb({value: 2}),cb({value: 3}),cb({value: 4}),cb({value: 5})
 */
export function traverseTree(rootNode, cb) {
  const nodesQueue = [rootNode];

  while (nodesQueue.length) {
    const {value, children} = nodesQueue.shift();
    cb({value});
    nodesQueue.push(...children);
  }
}
