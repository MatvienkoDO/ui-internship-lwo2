/**
 * @description takes node and removes all its siblings
 * @param {object} node
 * @return {void}
 */
export function removeSiblings(node) {
  const siblings = [];

  let sibling = node.nextElementSibling;
  while (sibling) {
    siblings.push(sibling);
    sibling = sibling.nextElementSibling;
  }

  sibling = node.previousElementSibling;
  while (sibling) {
    siblings.push(sibling);
    sibling = sibling.previousElementSibling;
  }

  for (const s of siblings) {
    s.remove();
  }
}
