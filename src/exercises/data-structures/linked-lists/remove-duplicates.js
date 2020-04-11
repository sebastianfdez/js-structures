'use strict';
import { LinkedList } from "../../../shared/classes/single-linked-list";

/**
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {LinkedList} linkedList  Linked list to be cleaned from duplicates 
 * @return {LinkedList}             Return the linked list without duplicates
 */
export function removeDuplicates(linkedList) {
  const dict = new Set();
  let node = linkedList.head;
  if (!node) {
    return linkedList;
  }
  dict.add(node.val);
  while (node.next) {
    if (dict.has(node.next.val)) {
      // If the value of the next node is already in the list, skip it
      node.next = node.next.next;
    } else {
      dict.add(node.next.val);
      node = node.next;
    }
  }
  return linkedList;
}
