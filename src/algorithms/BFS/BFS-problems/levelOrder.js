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
 * @return {number[][]}
 */
export function levelOrder(root) {
  /**
   * @type BinaryTreeNode[]
   */
  let queue = [];
  /**
   * @type number[][]
   */
  const levels = [];
  queue.push(root);
  if (!root.value) {
    return [];
  }
  while(queue.length) {
    levels.push(queue.map((node) => node.value));
    queue = queue.reduce((p, c) => {
      if (c.left) {
        p.push(c.left);
      }
      if (c.right) {
        p.push(c.right);
      }
      return p;
    }, []);
  }
  return levels;
};