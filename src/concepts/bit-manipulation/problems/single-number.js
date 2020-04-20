// Leetcode problem: https://leetcode.com/problems/single-number/

/**
 * Check using XOR:
 * 5: 0101
 * 6: 0110
 * 3: 0011
 * 5: 0101
 * 3: 0011
 * 
 * -> 0110
 * 
 * Time: O(N)
 * Additional space: O(1)
 * 
 * @param {number[]} nums List of numbers to check
 * @return {number} Return the number that is alone in the list
 */
export var singleNumber = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};
