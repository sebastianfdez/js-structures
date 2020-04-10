export class BinaryTreeNode {
  constructor(val) {
    this.val = val;
    /** @type {BinaryTreeNode} left and right children */
    this.left = this.right = null;
    // this.children
  }
}

export class TreeNode {
  constructor(val) {
    this.val = val;
    /** @type {TreeNode[]} childrens */
    this.children = [];
  }
}

/**
 * Converts array to Tree Node
 * 
 * @param {Array} list
 * @return {BinaryTreeNode}
*/
export var listToTree = function(list) {
  const root = new BinaryTreeNode(list[1]);
  appendChildsRec(root, list, 1);
  return root;
}
/**
 * Append children to actual node
 * @param {BinaryTreeNode} node actual node reference
 * @param {number[]} list list of numbers
 * @param {number} pos position of the actual node
 */
var appendChildsRec = function(node, list, pos) {
  if (2*pos < list.length) {
    node.left = new BinaryTreeNode(list[2*pos]);
    appendChildsRec(node.left, list, 2*pos);
  }
  if (2*pos + 1 < list.length) {
    node.right = new BinaryTreeNode(list[2*pos + 1]);
    appendChildsRec(node.right, list, 2*pos + 1);
  }
}