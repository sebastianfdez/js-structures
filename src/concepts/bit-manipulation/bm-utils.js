/**
 * Get a bit of a given number in a provided position
 * @param {number} num 
 * @param {number} index 
 * @return {boolean}
 */
export function getBit(num, index) {
  return (num & (1 << index)) !== 0;
}

/**
 * Set bit 'index' of a given number
 * @param {num} num 
 * @param {num} index 
 * @param { 0 | 1 } bit 
 * @return {number}
 */
export function setBit(num, index, bit = 1) {
  return bit ? num | (1 << index) : num & ~(1 << index);
}

/**
 * Converts a sequence of binary numbers to decimal
 * @param {string} binary 
 * ```ts
 * binaryToDecimal('1001'); // 9
 * ```
 */
export function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

/**
 * Converts a decimal to sequence of binary numbers
 * @param {number} decimal 
 * ```ts
 * decimalToBinary(9); // '1001'
 * ```
 */
export function decimalToBinary(decimal) {
  return Number(decimal).toString(2);
}

/**
 * Get number of '1' in the binary form
 * @param {number | string} number 
 * @return {number}
 * ```ts
 * // 00010011 -> 3
 * numOf1(19); // 3
 * numOf1('00010011'); // 3
 * ```
 */
export function numOf1(number) {
  const bin = typeof number === 'string' ? number : decimalToBinary(number);
  return (bin.match(/1/g) || []).length;
}
