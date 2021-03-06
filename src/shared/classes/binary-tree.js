export class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    /** @type {BinaryTreeNode} */
    this.parent = this.left = this.right = null;
  }
}

export class BinaryTree {
  constructor() {
    /** @type {BinaryTreeNode} root of the tree */
    this.root = null;
    /** @type {number} size of the tree */
    this.size = 0;
    this.height = 0;
  }
  /**
     * Add value to the tree
     * @param {number} value 
    */
  add(value) {}

  /**
   * Print the tree
   * @param {BinaryTreeNode} node 
   * @param {string} prefix 
   */
  printTree(node = this.root, prefix = '') {
    if (!node) {
      return;
    }
    this.printTree(node.right, prefix + '----');
    console.log(`${prefix}(${node.value})`);
    this.printTree(node.left, prefix + '----');
  }

  isSearchTree(node = this.root) {
    if (!node) {
      return true;
    }
    if ((node.left && node.value < node.left.value) ||
      (node.right && node.value > node.right.value)) {
        return false;
    }
    return this.isSearchTree(node.left) && this.isSearchTree(node.right);
  }
}

/**
 * Converts array to Tree Node
 * 
 * @param {Array} list
 * @return {BinaryTree} binary tree
*/
export function listToTree(list) {
  const root = new BinaryTreeNode(list[1]);
  const tree = new BinaryTree();
  appendChildsRec(root, list, 1);
  tree.root = root;
  return tree;
}
/**
 * Append children to actual node
 * @param {BinaryTreeNode} node actual node reference
 * @param {number[]} list list of numbers
 * @param {number} pos position of the actual node
 */
var appendChildsRec = function(node, list, pos, nullAccept = true) {
  if (2*pos < list.length && list[2*pos]) {
    node.left = new BinaryTreeNode(list[2*pos]);
    appendChildsRec(node.left, list, 2*pos);
  }
  if (2*pos + 1 < list.length && list[2*pos + 1]) {
    node.right = new BinaryTreeNode(list[2*pos + 1]);
    appendChildsRec(node.right, list, 2*pos + 1);
  }
}