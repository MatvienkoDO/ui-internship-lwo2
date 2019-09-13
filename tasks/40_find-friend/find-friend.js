const red = 'red';
const blue = 'blue';

export function findFriend(masks) {
  const indexesOfRed = masks.reduce((a, c, i) => {
    if (c === red) {
      a.push(i);
    }

    return a;
  }, []);

  return indexesOfRed
      .filter((i) =>
        (masks[i - 2] === blue && masks[i - 1] === blue)
        || (masks[i - 1] === blue && masks[i + 1] === blue)
        || (masks[i + 1] === blue && masks[i + 2] === blue)
      )
      .length;
}
