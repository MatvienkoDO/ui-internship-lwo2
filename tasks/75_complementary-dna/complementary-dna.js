import {findCorresponding} from '../74_dna-pairing/dna-pairing';

/**
 * @description maps dna sequence according to rules of acid correspondence
 * @param {string} dna sequence of dna acids
 * @return {string} sequence of corresponding dna acids
 * @example 'AC' -> 'TG'
 */
export function DNAStrand(dna) {
  return dna
      .split('')
      .map(findCorresponding)
      .join('');
}
