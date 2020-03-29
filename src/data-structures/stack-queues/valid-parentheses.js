
/**
* Leetcode problem: https://leetcode.com/problems/valid-parentheses/
*/
/**
* @param {string} s
* @return {boolean}
*/
export var isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (!match(s[i], last)) {
        return false;
      }
    }
  }
  return stack.length ? false : true;
};

var match = function(close_, open_) {
  switch (close_) {
    case ')':
      return open_ === '('; 
    case '}':
      return open_ === '{'; 
    case ']':
      return open_ === '[';
    default:
      return false;
  }
}