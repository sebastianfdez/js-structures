import { ListNode } from "../../shared/single-linked-list";

/**
 * Leetcode problem: https://leetcode.com/problems/merge-k-sorted-lists/submissions/
 * Merge k sorted linked lists O(N*K^2)
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
export var mergeKLists = function(lists) {
  let sorted = new ListNode();
  let tempSorted = sorted;
  /** @type ListNode[] } */
  let candidates = [];
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      insertNodeCandidate(candidates, lists[i]);
    }
  }
  // O(N*K)
  while (candidates.length) {
    tempSorted.next = candidates.shift(); // O(K)
    tempSorted = tempSorted.next;
    if (tempSorted.next) {
      insertNodeCandidate(candidates, tempSorted.next);
    }
  }
  return sorted.next;
};
/**
 * Add the temp node in the correct position considering its value.
 * @param {ListNode[]} candidates List the candidate nodes
 * @param {ListNode} temp node to insert in the list
 */
var insertNodeCandidate = function(candidates, temp) {
  for (let i = candidates.length - 1; i >= 0; i--) {
    if (candidates[i].val < temp.val) {
      candidates.splice(i + 1, 0, temp);
      return;
    }
  }
  candidates.splice(0, 0, temp);
}
