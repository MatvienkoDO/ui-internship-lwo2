export function traverseTree(rootNode, cb) {
  const nodesQueue = [rootNode];

  while (nodesQueue.length) {
    const {value, children} = nodesQueue.shift();
    cb({value});
    nodesQueue.push(...children);
  }
}
