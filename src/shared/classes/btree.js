export class BTreeNode {
  constructor(isLeaf) {
    /**
     * @type {number[]} list of values in the node
    */
    this.values = [];
    /**
     * @type {boolean} is a leaf
    */
    this.leaf = isLeaf;
    /**
     * @type {BTreeNode[]}
    */
    this.children = [];
    /**
     * Reference to the tree its belong.
     * @type {BTree}
     */
    this.tree = null;
    /**
     * @type {BTreeNode}
    */
    this.parent = null;
  }

  /**
   * Number of values
   * @returns {number}
   */
  get n() {
    return this.values.length;
  }

  /**
   * Add value
   * @param {number} value 
   * @param {number} pos 
   */
  addValue(value) {
    if (!value) {
      return;
    }
    let pos = 0;
    while (pos < this.n && this.values[pos] < value) {
      pos++;
    }
    this.values.splice(pos, 0, value);
  }

  /**
   * Delete value and return it
   * @param {number} pos position
   * @return {number}
   */
  removeValue(pos) {
    if (pos >= this.n) {
      return null;
    }
    return this.values.splice(pos, 1)[0];
  }

  /**
   * Add child node at position pos
   * @param {BTreeNode} node 
   * @param {number} pos 
   */
  addChild(node, pos) {
    this.children.splice(pos, 0, node);
    node.parent = this;
  }
  /**
   * Delete node from position and return it
   * @param {number} pos 
   * @return {BTreeNode}
   */
  deleteChild(pos) {
    return this.children.splice(pos, 1)[0];
  }
}

/**
 * btree namespace.
 * @type {BTree}
*/
export default class BTree {
  constructor(order) {
    /** @type {number} */
    this.order = order;
    /** 
     * Root node of the tree.
     * @type {BTreeNode} 
    */
    this.root;
  }

  /**
   * Search a value in the Tree and return the node. O(log N)
   * @param {number} value 
   * @returns {BTreeNode}
   */
  searchValue(value) {
    // Find the node that contains the value
    const node = null;
    const actual = this.root;
    while (!node && actual) {
      if (actual.values.includes(parseInt(value))) {
        node = actual;
      } else {
        // Search in the childs
        if (actual.leaf) {
          // Value was not found
          actual = null;
        } else {
          let child = 0;
          while (child <= actual.n && actual.values[child] < parseInt(value)) {
            child++; 
          }
          actual = actual.children[child];
        }
      }
    }
    return node;
  }
    
  /**
   * Deletes the value from the Tree. O(log N)
   * @param {number} value 
   */
  delete(value) {
    if (this.root.n === 1 && !this.root.leaf &&
      this.root.children[0].n === this.order-1 && this.root.children[1].n === this.order -1) {
      // Check if the root can shrink the tree into its childs
      this.mergeNodes(this.root.children[1], this.root.children[0]);
      this.root = this.root.children[0];
    }
    // Start looking for the value to delete
    this.deleteFromNode(this.root, parseInt(value));
  }

  /**
   * Delete a value from a node
   * @param {BTreeNode} node 
   * @param {number} value 
   */
  deleteFromNode(node, value) {
    // Check if value is in the actual node 
    const index = node.values.indexOf(value);
    if (index >= 0) {
      // Value present in the node
      if (node.leaf && node.n > this.order - 1) {
        // If the node is a leaf and has more than order-1 values, just delete it
        node.removeValue(node.values.indexOf(value));
        return;
      }
      // Check if one children has enough values to transfer
      if (node.children[index].n > this.order - 1 ||
        node.children[index + 1].n > this.order - 1) {
        // One of the immediate children has enough values to transfer
        if (node.children[index].n > this.order - 1) {
          // Replace the target value for the higher of left node.
          // Then delete that value from the child
          const predecessor = this.getMinMaxFromSubTree(node.children[index], 1);
          node.values[index] = predecessor;
          return this.deleteFromNode(node.children[index], predecessor);
        }
        const successor = this.getMinMaxFromSubTree(node.children[index+1], 0);
        node.values[index] = successor;
        return this.deleteFromNode(node.children[index+1], successor);
      }
      // Children has not enough values to transfer. Do a merge
      this.mergeNodes(node.children[index + 1], node.children[index]);
      return this.deleteFromNode(node.children[index], value);
    }
    // Value is not present in the node
    if (node.leaf) {
      // Value is not in the tree
      return;
    }
    // Value is not present in the node, search in the children
    let nextNode = 0;
    while (nextNode < node.n && node.values[nextNode] < value) {
      nextNode++;
    }
    if (node.children[nextNode].n > this.order - 1) {
      // Child node has enough values to continue
      return this.deleteFromNode(node.children[nextNode], value);
    }
    // Child node has not enough values to continue
    // Before visiting next node transfer a value or merge it with a brother
    if ((nextNode > 0 && node.children[nextNode - 1].n > this.order - 1) ||
      (nextNode < node.n && node.children[nextNode + 1].n > this.order - 1)) {
      // One of the immediate children has enough values to transfer
      if (nextNode > 0 && node.children[nextNode - 1].n > this.order - 1) {
        this.transferValue(node.children[nextNode - 1], node.children[nextNode]);
      } else {
        this.transferValue(node.children[nextNode + 1], node.children[nextNode]);
      }
      return this.deleteFromNode(node.children[nextNode], value);
    }
    // No immediate brother with enough values.
    // Merge node with immediate one brother
    this.mergeNodes(
      nextNode > 0 ? node.children[nextNode - 1] : node.children[nextNode + 1],
      node.children[nextNode]);
    return this.deleteFromNode(node.children[nextNode], value);
  }

  /**
   * Transfer one value from the origin to the target.
   * @param {BTreeNode} origin 
   * @param {BTreeNode} target 
  */
  transferValue(origin, target) {
    const indexo = origin.parent.children.indexOf(origin);
    const indext = origin.parent.children.indexOf(target);
    if (indexo < indext) {
      target.addValue(target.parent.removeValue(indexo));
      origin.parent.addValue(origin.removeValue(origin.n-1));
      if (!origin.leaf) {
        target.addChild(origin.deleteChild(origin.children.length-1), 0);
      }
    } else {
      target.addValue(target.parent.removeValue(indext));
      origin.parent.addValue(origin.removeValue(0));
      if (!origin.leaf) {
        target.addChild(origin.deleteChild(0), target.children.length);
      }
    }
  }

  /**
   * Merge 2 nodes into one with the parent median value. O(1)
   * @param {BTreeNode} origin 
   * @param {BTreeNode} target 
  */
  mergeNodes(origin, target) {
    const indexo = origin.parent.children.indexOf(origin);
    const indext = target.parent.children.indexOf(target);
    target.addValue(target.parent.removeValue(Math.min(indexo, indext)));
    for (let i = origin.n - 1; i >= 0; i--) {
      target.addValue(origin.removeValue(i));
    }
    // Remove reference to origin node
    target.parent.deleteChild(indexo);
    // Transfer all the children from origin node to target
    if (!origin.leaf) {
      while (origin.children.length) {
        indexo > indext ?
        target.addChild(origin.deleteChild(0), target.children.length) :
        target.addChild(origin.deleteChild(origin.children.length-1), 0);
      }
    }
  }

  /**
   * Insert a new value in the tree O(log N)
   * @param {number} value
   */
  insert(value) {
    const actual = this.root;
    if (actual.n === 2 * this.order - 1) {
      // Create a new node to become the root
      // Append the old root to the new one
      const temp = new BTreeNode(false);
      temp.tree = this;
      this.root = temp;
      temp.addChild(actual, 0);
      this.split(actual, temp, 1);
      this.insertNonFull(temp, parseInt(value));
    } else {
      this.insertNonFull(actual, parseInt(value));
    }
  };

  /**
   * Divide child node from parent into parent.values[pos-1] and parent.values[pos]
   * @param {BTreeNode} child 
   * @param {BTreeNode} parent 
   * @param {number} pos 
   */
  split(child, parent, pos) {
    const newChild = new BTreeNode(child.leaf);
    newChild.tree = this.root.tree;
    // Create a new child
    // Pass values from the old child to the new
    for (let k = 1; k < this.order; k++) {
      newChild.addValue(child.removeValue(this.order));
    }
    // Trasspass child nodes from the old child to the new
    if (!child.leaf) {
      for (let k = 1; k <= this.order; k++) {
        newChild.addChild(child.deleteChild(this.order), k - 1);
      }
    }
    // Add new child to the parent
    parent.addChild(newChild, pos);
    // Pass value to parent
    parent.addValue(child.removeValue(this.order - 1));
    parent.leaf = false;
  }

  /**
   * Get the lower or higher value in a sub-tree
   * @param {BTreeNode} node 
   * @param { 0 | 1 } max 1 for find max, 0 for min
   * @returns {number}
   */
  getMinMaxFromSubTree(node, max) {
    while (!node.leaf) {
      node = node.children[max ? node.n : 0];
    }
    return node.values[max ? node.n - 1 : 0];
  }

  /**
   * Insert a value in a not-full node
   * @param {BTreeNode} node 
   * @param {number} value
   */
  insertNonFull(node, value) {
    if (node.leaf) {
      node.addValue(value);
      return;
    }
    let temp = node.n;
    while (temp >= 1 && value < node.values[temp - 1]) {
      temp = temp - 1;
    }
    if (node.children[temp].n === 2 * this.order - 1) {
      this.split(node.children[temp], node, temp + 1);
      if (value  > node.values[temp]) {
        temp = temp + 1;
      }
    }
    this.insertNonFull(node.children[temp], value);
  } 
}
