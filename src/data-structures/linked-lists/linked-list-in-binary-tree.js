'use strict';

import { BinaryTreeNode } from "../../shared/binary-tree";
import { ListNode } from "../../shared/single-linked-list";

/**
  * Leetcode problem: https://leetcode.com/problems/linked-list-in-binary-tree/submissions/
*/

/**
 * @param {ListNode} head
 * @param {BinaryTreeNode} root
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
/**
 * @param {ListNode} listNode
 * @param {BinaryTreeNode} treeNode
 * @return {boolean}
*/
var isSubPathRec = function(listNode, treeNode) {
  if (listNode === null) {
    return true;
  }
  if (treeNode === null) {
    return false;
  }
  if (listNode.val === treeNode.value) {
    return isSubPathRec(listNode.next, treeNode.left) || isSubPathRec(listNode.next, treeNode.right);
  }
  return false;
};
