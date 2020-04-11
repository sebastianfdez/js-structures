import { BinaryTree, BinaryTreeNode } from "../../../shared/classes/binary-tree";
import { LinkedList } from "../../../shared/classes/single-linked-list";

/**
 * Given a Binary Tree, return a list with a linked-list for every depth.
 * @param {BinaryTree} tree 
 * @returns {LinkedList[]}
 */
export function listOfDepths(tree) {
  const list = [];
  addNodeToDepthListRec(list, tree.root, 0);
  return list;
}
/**
 * Append every node to the linked list associated to the depth
 * @param {LinkedList[]} list List of linked lists
 * @param {BinaryTreeNode} node Actual node
 * @param {number} depth Actual depth
 */
function addNodeToDepthListRec(list, node, depth) {
  if (!node) {
    return;
  }
  if (!list[depth]) {
    list[depth] = new LinkedList();
  }
  list[depth].addLast(node.value);
  addNodeToDepthListRec(list, node.left, depth + 1);
  addNodeToDepthListRec(list, node.right, depth + 1);
}