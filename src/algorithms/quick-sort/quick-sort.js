
/**
 * Quicksort implemented in JS by @sebastianfdez
 * @param {number[]} nums 
 * @returns {number[]}
 */
export function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let pivot = nums.length - 1;
  let actual = 0;
  while (pivot > actual) {
    if (nums[actual] > nums[pivot]) {
      // [ .., 6 (actual), .., X, 3 (pivot), .. ]
      // [ .., X, .., 3, 6, .. ]
      const temp = nums[actual]; // 1
      nums[actual] = nums[pivot - 1]; // [1,0]
      nums[pivot - 1] = nums[pivot]; // [0,0]
      nums[pivot] = temp; //[0,1]
      pivot--;
    } else {
      // [ .., 2 (actual), .., 3 (pivot), .. ]
      actual++;
    }
  }
  return quickSort(nums.slice(0, actual))
        .concat([nums[actual]])
        .concat(quickSort(nums.slice(actual + 1)));
}