/**
* Leetcode problem: https://leetcode.com/problems/longest-valid-parentheses/
*/
/**
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param {string} s  String to evaluate
 * @return {number}   Number of maximum valid parentheses
*/
export var longestValidParentheses = function(s) {
  if (!s.length) {
    return 0;
  }
  const mem = Array(s.length).fill(0);
  for (let i = 1; i < s.length; i ++) {
    longestValidParenthesesRec(s, i, mem);
  };
  return Math.max(...mem);
};

var longestValidParenthesesRec = function(s, pos, mem) {
  // Case: ???????) else: 0
  if (s[pos] === ')') {
    if (s[pos-1] === '(') {
      // Case: ????????X()
      // 2 + Mem[i-2] how much is saved before
      mem[pos] = pos > 2 ? 2 + mem[pos - 2] : 2;
    } else {
      // Case: ????????))
      // If mem[i-1] go to the beggining of its collection
      if (pos > mem[pos-1]) {
        // ...And check if it is an '('
        if (s[pos - mem[pos-1] - 1] === '(') {
          // Match! Save the collecion of i-1 plus 2
          mem[pos] = 2 + mem[pos - 1];
          // If there are a valid collection before this, add it
          mem[pos] += pos >= mem[pos] ? mem[pos - mem[pos]] : 0;
        } 
      }
    }
  }
  return mem[pos];
}
