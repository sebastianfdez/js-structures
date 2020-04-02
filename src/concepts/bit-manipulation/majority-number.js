// Leetcode problem: https://leetcode.com/problems/majority-element/

/**
 * Check using maximum bit in each position:
 * 5: 0101
 * 5: 0101
 * 3: 0011
 * 5: 0101
 * 2: 0010
 * 3: 0011
 * 5: 0101
 * 
 * -> 0101 (5)
 * 
 * Time: O(32*N) = O(N)
 * Additional space: O(1)
 * 
 * @param {number[]} nums List of numbers to check
 * @return {number} Return the number that is the majority in the list
 */
export var majorityElement = function(nums) {
  // If there is a negative,
  // it will be necessary to check the 32 positions,
  // otherwise, just until the biggest bit position.
  const maxbit = Math.min(...nums) > 0 ? Math.floor(Math.log2(Math.max(...nums))) : 31;
  let result = 0;
  let sum = 0;
  for (let i = 0; i <= maxbit; i++) {
    sum = 0;
    for (let j = 0; j < nums.length; j++) {
      sum += (nums[j] & 1<<i) !== 0 ? 1 : 0;
    }
    if (sum > (Math.floor(nums.length/2))) {
      result += 1<<i;
    }
  }
  return result;
};
