import { BinaryTreeNode } from "../../../shared/classes/binary-tree";

/**
 * Definition for a binary tree node.
 * function BinaryTreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/

/**
 * @param {BinaryTreeNode} root
 * @return {boolean}
 */
export function isSymmetric(root) {
  /**
   * @type BinaryTreeNode[]
   */
  const queue = [];
  if (root.left) {
    if (root.right) {
      queue.push(root.left);
      queue.push(root.right);
    } else {
      return false;
    }
  }
  if (root.right) {
    if (!root.left) {
      return false;
    }
  }
  while(queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if (left.value !== right.value) {
      return false;
    }
    if (left.left) {
      if (right.right) {
        queue.push(left.left);
        queue.push(right.right);
      } else {
        return false;
      }
    }
    if (right.right) {
      if (!left.left) {
        return false;
      }
    }
    if (left.right) {
      if (right.left) {
        queue.push(left.right);
        queue.push(right.left);
      } else {
        return false;
      }
    }
    if (right.left) {
      if (!left.right) {
        return false;
      }
    }
  }
  return true;
};