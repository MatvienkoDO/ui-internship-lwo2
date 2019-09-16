// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  return this
      .split(' ')
      .reduce((a, c, i) => {
        if (i) {
          return a + c[0].toUpperCase() + c.slice(1).toLowerCase();
        }

        return a + c.toLowerCase();
      }, '');
};
