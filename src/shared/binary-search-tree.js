import { BinaryTree, BinaryTreeNode } from "./binary-tree";


export class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }
  /**
   * Add value to the tree
   * @param {number} value 
  */
  add(value) {
    const node = new BinaryTreeNode(value);
    let actual = this.root;
    this.size++;
    if (!actual) {
      this.root = node;
      return;
    }
    while (actual) {
      if (node.value > actual.value) {
        // Go right
        if (!actual.right) {
          actual.right = node;
          actual = null;
          return;
        }
        actual = actual.right;
      } else {
        // Go left
        if (!actual.left) {
          actual.left = node;
          actual = null;
          return;
        }
        actual = actual.left;
      }
    }
    return this;
  }
  /**
   * Get height of the tree
   * @param {BinaryTreeNode} node 
   * @returns {number}
   */
  getHeight(node) {
    if (!node) {
      return 0;
    }
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }
}