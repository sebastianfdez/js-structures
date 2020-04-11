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
          node.parent = actual;
          actual = null;
          return;
        }
        actual = actual.right;
      } else {
        // Go left
        if (!actual.left) {
          actual.left = node;
          node.parent = actual;
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
  getHeight(node = this.root) {
    if (!node) {
      return 0;
    }
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  /**
   * Return true if a given tree is balances
   * @param {BinaryTreeNode} node 
   * @returns {boolean} is balances
   */
  isBalanced(node = this.root) {
    if (!node) {
      return true;
    }
    if (!this.isBalanced(node.left)) {
      return false;
    }
    if (!this.isBalanced(node.right)) {
      return false;
    }
    if (Math.abs(this.getHeight(node.left) - this.getHeight(node.right) > 1)) {
      return false;
    }
    return true;
  }

  /**
   * Search a node in a tree for a given value
   * @param {number} value 
   * @param {BinaryTreeNode} node 
   */
  get(value, node = this.root) {
    if (node.value === value) {
      return node;
    }
    if (value > node.value) {
      return node.right ? this.get(value, node.right) : null;
    }
    if (value < node.value) {
      return node.left ? this.get(value, node.left) : null;
    }
  }

  /**
   * Get the minimum node in the tree
   * @return {BinaryTreeNode} min
   */
  getMin() {
    let temp = this.root;
    while (temp.left) {
      temp = temp.left;
    }
    return temp;
  }
}