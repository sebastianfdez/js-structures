import { BinaryTreeNode } from "../../../shared/classes/binary-tree";

/**
 * Find the successor of a given node
 * @param {BinaryTreeNode} node 
 */
export function getSuccessor(node) {
  if (node.right) {
    return getLefterDescendant(node.right);
  }
  if (!node.parent) {
    return null;
  }
  let successor = node;
  let found = false;
  while (!found) {
    if (!successor.parent) {
      found = true;
    } else {
      if (successor.value < successor.parent.value) {
        // is a left child
        found = true;
      }
    }
    successor = successor.parent;
  }
  return successor;
}

/**
 * Return the node the most in the left in the descendant of a given node;
 * @param {BinaryTreeNode} node 
 * @returns {BinaryTreeNode}
 */
function getLefterDescendant(node) {
  let temp = node;
  while (temp.left) {
    temp = temp.left;
  }
  return temp;
}