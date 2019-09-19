const catYearsPerHumanYearAfterTwoHumanYears = 4;
const dogYearsPerHumanYearAfterTwoHumanYears = 5;

function firstYear(humanYears) {
  const {min, max} = Math;
  return min(max(0, humanYears), 1) * 15;
}

function secondYear(humanYears) {
  const {min, max} = Math;
  return min(max(0, humanYears - 1), 1) * 9;
}

function thirdYearAndNext(humanYears, yearsPerHumanYear) {
  return Math.max(0, humanYears - 2) * yearsPerHumanYear;
}

function catYears(humanYears) {
  return firstYear(humanYears)
      + secondYear(humanYears)
      + thirdYearAndNext(humanYears, catYearsPerHumanYearAfterTwoHumanYears);
}

function dogYears(humanYears) {
  return firstYear(humanYears)
      + secondYear(humanYears)
      + thirdYearAndNext(humanYears, dogYearsPerHumanYearAfterTwoHumanYears);
}

export function humanYearsCatYearsDogYears(humanYears) {
  return [humanYears, catYears(humanYears), dogYears(humanYears)];
}
