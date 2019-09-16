export function rowWeights(people) {
  return people
      .reduce((a, c, i) => {
        a[i % 2] += c;
        return a;
      }, [0, 0]);
}
