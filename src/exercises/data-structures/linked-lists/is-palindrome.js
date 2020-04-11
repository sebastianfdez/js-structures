'use strict';
import { LinkedList } from "../../../shared/classes/single-linked-list";

/**
 *
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {LinkedList} linkedList  Linked list to be checked 
 * @return {boolean}                Return true if linked list is palindrome
 */
export function isPalindrome(linkedList) {
  const even = linkedList.size % 2 === 0;
  const stack = [];
  let curr = linkedList.head;
  for (let i = 0; i < Math.floor(linkedList.size/2); i++) {
    stack.push(curr.val);
    curr = curr.next;
  }
  // If the list lenght is odd we will skip the middle one
  if (!even) {
    curr = curr.next;
  }
  for (let i = 0; i < Math.floor(linkedList.size/2); i++) {
    if (curr.val !== stack.pop()) {
      return false;
    }
    curr = curr.next;
  }
  return true;
}
