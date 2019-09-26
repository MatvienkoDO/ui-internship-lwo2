const lossPercentIncreasingPerTwoMonths = 0.5;

/**
 * @description calculates number of months and rest after buying
 * @param {number} priceOld start price of old thing (car)
 * @param {number} priceNew start price of new thing (car)
 * @param {number} savingsPerMonth amount of money per month
 * @param {number} percentLossByMonth
 * @return {number[]} array of 2 elements: number of months and rest
 * @example nbMonths(2000, 8000, 1000, 1.5) -> [6, 766]
 */
export function nbMonths(
    priceOld,
    priceNew,
    savingsPerMonth,
    percentLossByMonth
) {
  let months = 0;
  let saved = 0;

  while (priceNew > priceOld + saved) {
    ++months;

    saved += savingsPerMonth;

    if (months % 2 === 0) {
      percentLossByMonth += lossPercentIncreasingPerTwoMonths;
    }

    const lossMultiplier = (100 - percentLossByMonth) / 100;
    priceNew *= lossMultiplier;
    priceOld *= lossMultiplier;
  }

  return [months, Math.round(priceOld + saved - priceNew)];
}
