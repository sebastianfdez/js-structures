'use strict';

/**
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if permutation can make a palindrome
 */
export function palindromePermutation(str) {
  const dict = new Map();
  let odds = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      dict.set(str[i], dict.get(str[i]) + 1 || 1);
    }
  }
  dict.forEach((value) => {
    odds += value % 2;
  });
  return odds <= 1;
}

/**
 *
 * Time: O(NlogN)
 * Additional space: O(1)
 *
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if peremutation can make a palindrome
 */
export function palindromePermutation2(str) {
  str = str.sort();
  return str.reduce((ac,value,i) => ac + ((value === str[i-1] || value === str[i+1]) ? 0 : 1), 0) <= 1;
}
