import { BinarySearchTree } from "../../../shared/classes/binary-search-tree";

/**
 * Make a binary search tree from a sorted list of number.
 * Minimize the height of the tree
 * @param {number[]} values 
 */
export function makeMinimalHeightTree(values) {
  const binaryTree = new BinarySearchTree();
  addValues(binaryTree, values, 0, values.length - 1);
  return binaryTree;
}
/**
 * Recursively add the middle value to keep the minimum height in the tree
 * @param {BinarySearchTree} tree 
 * @param {number[]} values 
 * @param {number} init 
 * @param {number} end 
 */
function addValues(tree, values, init, end) {
  if (init > end) {
    return;
  }
  let middle = Math.floor(init + (end - init)/2);
  tree.add(values[middle]);
  addValues(tree, values, init, middle - 1);
  addValues(tree, values, middle + 1, end);
}
