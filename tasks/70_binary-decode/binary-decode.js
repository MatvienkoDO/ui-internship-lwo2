export function binaryDecode(binary = '') {
  return binary
      .split(' ')
      .map((b) => {
        const code = parseInt(b, 2);
        return String.fromCharCode(code);
      })
      .join('');
}
