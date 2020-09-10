
/**
 * Quicksort implemented in JS by @sebastianfdez
 * @param {number[]} nums 
 * @returns {number[]}
 */
export function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const mid = Math.floor(nums.length / 2);
  return merge(
    mergeSort(nums.slice(0, mid)),
    mergeSort(nums.slice(mid))
  );
}

/**
 * Merge 2 sorted lists in a new sorted list
 * @param {number[]} numsA 
 * @param {number[]} numsB 
 * @returns {number[]}
 */
function merge(numsA, numsB) {
  const mergedList = [];
  // While both lists still have numbers, push the lower value between both
  while (numsA.length && numsB.length) {
    if (numsA[0] <= numsB[0]) {
      mergedList.push(numsA.shift());
    } else {
      mergedList.push(numsB.shift());
    }
  }
  // Push the remaining values
  if (numsA.length) {
    mergedList.push(...numsA);
  } else if (numsB.length) {
    mergedList.push(...numsB);
  }
  return mergedList;
}
