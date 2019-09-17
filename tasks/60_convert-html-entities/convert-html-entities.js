export function convertHTML(text) {
  return text
      .replace(/&/gi, '&amp;')
      .replace(/</gi, '&lt;')
      .replace(/>/gi, '&gt;')
      .replace(/"/gi, '&quot;')
      .replace(/'/gi, '&apos;');
}
