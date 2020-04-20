import { decimalToBinary, binaryToDecimal, numOf1 } from "../bm-utils";

/**
 * Given a number, find the next one bigger and smaller that has the same amount of 1
 * @param {number} number 
 * @returns {number[]}
 * ```ts
 * // 00001010 -> bigger: 00001100, smaller: 00001001
 * nextNumbers(10); // [12, 9]
 * // 00010110 -> bigger: 00011001, smaller: 00010101
 * nextNumbers(22); // [25, 21]
 * ```
 */
export function nextNumbers(number) {
  let binary = '0' + decimalToBinary(number);
  let smaller = '';
  let bigger = '';
  let temp = 0;
  while (temp < binary.length && (smaller === '' || bigger === '')) {
    const slice = temp > 0 ? binary.slice(0 - temp - 2, 0 - temp) : binary.slice(0 - temp - 2);
    if (slice === '10') {
      smaller = binary;
      smaller = setCharAt(smaller, smaller.length-2-temp, '0');
      smaller = setCharAt(smaller, smaller.length-1-temp, '1');
      smaller = smaller.substr(0, smaller.length-temp) + biggerize(smaller.substr(smaller.length-temp));
    }
    if (slice === '01') {
      bigger = binary;
      bigger = setCharAt(bigger, bigger.length-2-temp, '1');
      bigger = setCharAt(bigger, bigger.length-1-temp, '0');
      bigger = bigger.substr(0, bigger.length-temp) + smallarize(bigger.substr(bigger.length-temp));
    }
    temp++;
  }
  return [
    bigger !== '' ? binaryToDecimal(bigger) : null,
    smaller !== '' ? binaryToDecimal(smaller) : null,
  ];
}

/**
 * Replace a char in a string in a given position
 * @param {string} str 
 * @param {number} index 
 * @param {string} chr 
 * @returns {string}
 */
function setCharAt(str, index, chr) {
  if (index > str.length-1) return str;
  return str.substr(0,index) + chr + str.substr(index+1);
}

/**
 * Return the smaller number as possible with same amount of 1
 * @param {string} string 
 * @return {string}
 */
function smallarize(string) {
  const num1 = numOf1(string);
  let small = '';
  for (let i = 0; i < string.length; i++) {
    if (i < string.length - num1) {
      small += '0';
    } else {
      small += '1';
    }
  }
  return small;
}

/**
 * Return the smaller number as possible with same amount of 1
 * @param {string} string 
 * @return {string}
 */
function biggerize(string) {
  const num1 = numOf1(string);
  let bigger = '';
  for (let i = 0; i < string.length; i++) {
    if (i < num1) {
      bigger += '1';
    } else {
      bigger += '0';
    }
  }
  return bigger;
}
