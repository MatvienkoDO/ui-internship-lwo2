const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;

const preCalculatedData = 2 * Math.PI / Math.sqrt(GM);
function evalOrbitalPeriod(radius) {
  return preCalculatedData * Math.sqrt(radius * radius * radius);
}

/**
 * @typedef {{
 *  name: string,
 *  avgAlt: number
 * }} BodyAltitude
 * @typedef {{
 *  name: string,
 *  orbitalPeriod: number
 * }} BodyPeriod
 * @description counts orbital period of space body
 * @param {BodyAltitude[]} spaceBodies
 * @return {BodyPeriod[]}
 * @example [{name:'s',avgAlt:35873.55}] -> [{name:'s',orbitalPeriod:86400}]
 */
export function orbitalPeriod(spaceBodies) {
  return spaceBodies
      .map(({name, avgAlt}) => {
        const period = evalOrbitalPeriod(EARTH_RADIUS + avgAlt);

        return {
          name,
          orbitalPeriod: Math.round(period),
        };
      });
}
