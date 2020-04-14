import { BinaryTreeNode } from "../../../shared/classes/binary-tree";

/**
 * Given 2 nodes find the first common ancestor in a binary tree.
 * @param {BinaryTreeNode} node1 
 * @param {BinaryTreeNode} node2
 * @returns {BinaryTreeNode} first common ancestor 
 */
export function firstCommonAncestor(node1, node2) {
  const visited = new Set();
  let temp1 = node1;
  let temp2 = node2;
  let fca = null;
  if (node1.value === node2.value) {
    return node1;
  }
  visited.add(temp1.value);
  visited.add(temp2.value);
  while(temp1 || temp2) {
    // Node 1
    if (temp1) {
      if (!temp1.parent) {
        // Stop searching with this line
        temp1 = null;
      } else {
        if (visited.has(temp1.parent.value)) {
          fca = temp1.parent;
          temp1 = null;
        } else {
          visited.add(temp1.parent.value);
          temp1 = temp1.parent;
        }
      }
    }
    // Node 2
    if (temp2) {
      if (!temp2.parent) {
        // Stop searching with this line
        temp2 = null;
      } else {
        if (visited.has(temp2.parent.value)) {
          fca = temp2.parent;
          temp2 = null;
        } else {
          visited.add(temp2.parent.value);
          temp2 = temp2.parent;
        }
      }
    }
  }
  return fca;
}