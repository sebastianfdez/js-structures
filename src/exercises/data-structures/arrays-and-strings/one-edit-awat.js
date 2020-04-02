'use strict';

/**
 *
 * Time: O(N)
 * Additional space: O(1)
 *
 *
 * @param  {string[]} str1 String to check, passed in as a character array
 * @param  {string[]} str2 Second tring to check, passed in as a character array
 * @return {boolean}       True if one string can be transformed in the other with one edition
 */
export function oneEditAway(str1, str2) {
  if (str1.length === str2.length) {
    // Check replace
    let dif = 0;
    for (let i = 0; i < str1.length; i++) {
      dif += str1[i] === str2[i] ? 0 : 1;
    }
    return dif <= 1;
  } else if (str1.length === str2.length + 1) {
    // Check delete
    let deleted = false;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[deleted ? i-1 : i]) {
        if (deleted) {
          return false;
        }
        deleted = true;
      }
    }
    return true;
  } else if (str1.length + 1 === str2.length) {
    // Check addition
    let added = false;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[added ? i+1 : i]) {
        if (added) {
          return false;
        }
        added = true;
      }
    }
    return true;
  }
  return false;
}
