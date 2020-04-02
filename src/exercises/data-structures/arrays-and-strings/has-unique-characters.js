'use strict';

/**
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersSet(str) {
  const dic = new Set();
  for (let i = 0; i < str.length; i++) {
    if (dic.has(str[i])) {
      return false;
    }
    dic.add(str[i]);
  }
  return true;
}

/**
 *
 * Time: O(NlogN)
 * Additional space: O(1)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersSet2(str) {
  str.sort();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      return false;
    }
  }
  return true;
}
