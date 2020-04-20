import { setBit, getBit } from "../bm-utils"

/**
 * Insert a given num2 into num1 at position i
 * @param {number} num1 
 * @param {number} num2 
 * @param {number} i 
 * @param {number} j 
 * ```ts
 * // insert '11' into '100000' at 2
 * insertInto(32, 3, 2, 4);  //'101100' = 44
 * ```
 */
export function insertInto(num1, num2, i, j) {
  let temp = num2 << i;
  for (let bit = i; bit < j; bit++) {
    const bit_ = getBit(temp, bit);
    num1 = setBit(num1, bit, bit_);
  }
  return num1;
}
