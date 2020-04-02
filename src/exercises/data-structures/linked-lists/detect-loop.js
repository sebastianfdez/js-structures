'use strict';
import { LinkedList, ListNode } from "../../../shared/single-linked-list";

/**
 *
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {LinkedList} linkedList  Linked list to be checked 
 * @return {ListNode}               Return the node that creates the loop
 */
export function detectLoop(linkedList) {
  const valueRef = new Map();
  let safeCounter = 0;
  for (let current = linkedList.head; current; current = current.next) {
    // Stop iteration if there is a infinite loop
    if (safeCounter > linkedList.size * 2) {
      return null;
    }
    if (valueRef.has(current.val)) {
      for (let i = 0; i < valueRef.get(current.val).length; i++) {
        if (current === valueRef.get(current.val)[i]) {
          return current;
        }
      }
      valueRef.get(current.val).push(current);
    } else {
      valueRef.set(current.val, [current]);
    }
    safeCounter++;
  }
  return null;
}
