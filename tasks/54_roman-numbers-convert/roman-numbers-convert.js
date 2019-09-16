const rules = [
  {
    arabic: 1000,
    roman: 'M',
  },
  {
    arabic: 900,
    roman: 'CM',
  },
  {
    arabic: 500,
    roman: 'D',
  },
  {
    arabic: 400,
    roman: 'CD',
  },
  {
    arabic: 100,
    roman: 'C',
  },
  {
    arabic: 90,
    roman: 'XC',
  },
  {
    arabic: 50,
    roman: 'L',
  },
  {
    arabic: 40,
    roman: 'XL',
  },
  {
    arabic: 10,
    roman: 'X',
  },
  {
    arabic: 9,
    roman: 'IX',
  },
  {
    arabic: 5,
    roman: 'V',
  },
  {
    arabic: 4,
    roman: 'IV',
  },
  {
    arabic: 1,
    roman: 'I',
  },
];

/**
 * converts number from arabic digits in roman form
 * @param {number} arabicNumber number that consists of arabic numerals
 * @return {string} string that represents number in roman manner
 */
export function convertToRoman(arabicNumber) {
  const initialAccumulator = {
    arabic: arabicNumber,
    roman: '',
  };

  return rules
      .reduce((a, rule) => {
        while (a.arabic >= rule.arabic) {
          a.arabic -= rule.arabic;
          a.roman += rule.roman;
        }

        return a;
      }, initialAccumulator)
      .roman;
}
