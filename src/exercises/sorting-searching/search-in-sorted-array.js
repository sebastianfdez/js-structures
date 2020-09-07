/**
 * Find target x in sorted and rotated list l.
 * @param {number} x Target to search
 * @param {number[]} l Rotated sorted array
 * @returns {number} position
 */
export function findInRotatedArray(x, l) {
  if (l.length === 1) {
    return l[0] === x ? 0 : null;
  }
  const limit = l[0];
  const median = Math.floor(l.length/2);
  if (x > limit) {
    if (x > l[median]) {
      if (l[median] < limit) {
        return returnLower(l, x, median);
      }
      return returnHigher(l, x, median);
    } else if (x < l[median]) {
      return returnLower(l, x, median);
    }
    return median;
  } else if (x < limit) {
    if (x > l[median]) {
      return returnHigher(l, x, median);
    } else if (x < l[median]) {
      if (l[median] > limit) {
        return returnHigher(l, x, median);
      }
      return returnLower(l, x, median);
    }
    return median;
  }
  return 0;
}

/**
 * Iterates in the higher half of the list
 * @param {numer[]} l list of numbers
 * @param {number} x target
 * @param {number} median median
 * @returns {number} position
 */
export function returnHigher(l, x, median) {
  const pos = findInRotatedArray(x, l.slice(median));
  return pos ? median + pos : null;
}

/**
 * Iterates in the lower half of the list
 * @param {numer[]} l list of numbers
 * @param {number} x target
 * @param {number} median median
 * @returns {number} position
 */
export function returnLower(l, x, median) {
  const pos = findInRotatedArray(x, l.slice(0, median));
  return pos ? pos : null;
}
