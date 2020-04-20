import { decimalToBinary, binaryToDecimal } from "../bm-utils";

/**
 * Return the maximum number of '1' in a row that is possible to get
 * flipping one 0 to 1
 * @param {number} number 
 * ```ts
 * // 1775: 11011101111 -> 11011111111
 * flipToWin(1775); // 8
 * ```
 */
export function flipToWin(number) {
  const binary = decimalToBinary(number);
  let max = 0;
  let temp = 0;
  let flip = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      temp++;
    } else if (binary[i] === '0') {
      if (flip > 0) {
        max = Math.max(max, temp);
        temp = temp - flip;
      }
      temp++;
      flip = temp;
    }
  }
  max = Math.max(max, temp);
  return max;
}
