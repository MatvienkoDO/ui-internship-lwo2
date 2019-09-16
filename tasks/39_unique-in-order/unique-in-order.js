export function uniqueInOrder(seq) {
  if (typeof seq === 'string') {
    seq = seq.split('');
  }

  const result = [];
  let last = undefined;

  for (const item of seq) {
    if (item !== last) {
      result.push(item);
    }

    last = item;
  }

  return result;
}
