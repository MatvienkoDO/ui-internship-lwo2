/**
 * @description replaces symbols that are being used in html to codes
 * @param {string} text text to convert
 * @return {string} converted text
 * @example convertHTML('Dolce & Gabbana') = 'Dolce &amp; Gabbana'
 */
export function convertHTML(text) {
  return text
      .replace(/&/gi, '&amp;')
      .replace(/</gi, '&lt;')
      .replace(/>/gi, '&gt;')
      .replace(/"/gi, '&quot;')
      .replace(/'/gi, '&apos;');
}
