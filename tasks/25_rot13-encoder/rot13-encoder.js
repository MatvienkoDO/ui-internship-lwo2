const firstCharCode = 'A'.charCodeAt(0);

export function rot13Encoder(text) {
  return text
      .split('')
      .map((character) => {
        if (!/[A-Z]/.test(character)) {
          return character;
        }

        const code = character.charCodeAt(0);
        const newCode = (code - firstCharCode + 13) % 26 + firstCharCode;

        return String.fromCharCode(newCode);
      })
      .join('');
}
