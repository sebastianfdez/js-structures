'use strict';
/**
* Leetcode problem: https://leetcode.com/problems/next-greater-node-in-linked-list/submissions/
*/
/**
 * @param {ListNode} head
 * @return {number[]}
 */
export var nextLargerNodes = function(head) {
  let node = head;
  const unchangedNodes = [];
  while (node && node.val) {
    for (let i = unchangedNodes.length - 1; i >= 0; i--) {
      if (unchangedNodes[i].val < node.val) {
        unchangedNodes[i].newVal = node.val;
        unchangedNodes.pop();
      }
    }
    node.newVal = 0;
    unchangedNodes.push(node);
    node = node.next;
  }
  const answer = getAnswer(head);
  return answer;
};

var getAnswer = function(head) {
  const answer = [];
  let node = head;
  while (node && node.val) {
    answer.push(node.newVal);
    node = node.next;
  }
  return answer;
}