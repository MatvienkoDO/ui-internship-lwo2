/**
 * @description counts how many times mother will see the ball
 * @param {number} h initial height from which the ball has fallen
 * @param {number} bounce coefficient of height decreasing for next bounce
 * @param {number} window height of window where mother is
 * @return {number}
 * @example bouncingBall(3, 0.66, 1.5) -> 3
 */
export function bouncingBall(h, bounce, window) {
  if (!(h && h > 0)) {
    return -1;
  }
  if (!(0 < bounce && bounce < 1)) {
    return -1;
  }
  if (!(window < h)) {
    return -1;
  }

  let appearing = 1;

  h *= bounce;

  while (h > window) {
    appearing += 2;
    h *= bounce;
  }

  return appearing;
}
