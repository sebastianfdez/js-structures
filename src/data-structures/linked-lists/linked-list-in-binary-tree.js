'use strict';
/**
  * Leetcode problem: https://leetcode.com/problems/linked-list-in-binary-tree/submissions/
*/

/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
*/

export var isSubPath = function(head, root) {
  if (root === null) {
    return false;
  }
  if (isSubPathRec(head, root)) {
    return true;
  }
  return isSubPath(head, root.left) || isSubPath(head, root.right);
};

var isSubPathRec = function(listNode, treeNode) {
  if (listNode === null) {
    return true;
  }
  if (treeNode === null) {
    return false;
  }
  if (listNode.val === treeNode.val) {
    return isSubPathRec(listNode.next, treeNode.left) || isSubPathRec(listNode.next, treeNode.right);
  }
  return false;
};
