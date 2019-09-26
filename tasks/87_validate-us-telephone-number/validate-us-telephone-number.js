const phoneCheckRegexp =
  /^(1(\s|-)?)?(\d{3}|\(\d{3}\))(\s|-)?\d{3}(\s|-)?\d{4}$/;

/**
 * @description checks string for being correct phone number
 * @param {string} phoneNumber
 * @return {boolean}
 * @example '1 555-555-5555' -> true
 */
export function telephoneCheck(phoneNumber) {
  return phoneCheckRegexp.test(phoneNumber);
}
