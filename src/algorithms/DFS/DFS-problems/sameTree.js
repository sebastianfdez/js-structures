import { BinaryTreeNode } from "../../../shared/classes/binary-tree";

/**
 * Leetcode problem: https://leetcode.com/problems/same-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {BinaryTreeNode} p
 * @param {BinaryTreeNode} q
 * @return {boolean}
 */
export function isSameTree(p, q) {
  /**
   * @type BinaryTreeNode[][]
   */
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  const stack = [];
  stack.push([p, q]);
  let actual = null;
  while (stack.length) {
    actual = stack.pop();
    if (actual[0].value !== actual[1].value) {
      return false;
    }
    if (
      (actual[0].left && !actual[1].left) ||
      (!actual[0].left && actual[1].left) ||
      (actual[0].right && !actual[1].right) ||
      (!actual[0].right && actual[1].right)
    ) {
      return false
    }
    if (actual[0].left) {
      stack.push([actual[0].left, actual[1].left]);
    }
    if (actual[0].right) {
      stack.push([actual[0].right, actual[1].right]);
    }
  }
  return true;
};