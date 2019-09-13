export function uniqueInOrder(seq) {
  if (typeof seq === 'string') {
    seq = seq.split('');
  }

  const seqIter = seq.values();

  const result = [];
  let last = undefined;

  for (const item of seqIter) {
    if (item !== last) {
      result.push(item);
    }

    last = item;
  }

  return result;
}
