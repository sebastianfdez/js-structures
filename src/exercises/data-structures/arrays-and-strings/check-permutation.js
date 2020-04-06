'use strict';

/**
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 *
 * @param  {string[]} str1 String1 to check
 * @param  {string[]} str2 String2 to check
 * @return {boolean}      True if one string is the permutation of the other
 */
export function checkPermutation(str1, str2) {
  const dict = new Map();
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    dict.set(str1[i], dict.get(str1[i]) + 1 || 1);
  }
  for (let i = 0; i < str2.length; i++) {
    if (!dict.has(str2[i]) || dict.get(str2[i]) === 0) {
      return false;
    } else {
      dict.set(str2[i], dict.get(str2[i]) - 1);
    }
  }
  return true;
}

/**
 *
 * Time: O(N * Log N)
 * Additional space: O(1)
 *
 *
 * @param  {string[]} str1 String1 to check
 * @param  {string[]} str2 String2 to check
 * @return {boolean}      True if one string is the permutation of the other
 */
export function checkPermutation2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  str1 = str1.sort();
  str2 = str2.sort();
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }
  return true;
}
