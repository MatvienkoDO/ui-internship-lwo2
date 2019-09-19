// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  return this
      .split(' ')
      .reduce((a, c) => a + c[0].toUpperCase() + c.slice(1).toLowerCase(), '');
};
