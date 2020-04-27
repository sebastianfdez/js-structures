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

  /**
   * Get the immediate with more values
   * @returns {BTreeNode}
   */
  getImmediateBrother() {
    const index = this.parent.children.indexOf(this);
    if (index > 0 && this.parent.children[index-1].n > this.tree.order - 1) {
      return this.parent.children[index-1];
    }
    if (index < this.parent.n && this.parent.children[index+1].n > this.tree.order - 1) {
      return this.parent.children[index+1];
    }
    return index > 0 ? this.parent.children[index-1] : this.parent.children[index+1];
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
   * Deletes the value from the Tree
   * @param {number} value 
   */
  delete(value) {
    if (this.root.n === 1 && !this.root.leaf &&
      this.root.children[0].n === this.order-1 && this.root.children[1].n === this.order -1) {
      // Check if the root can shrink the tree into its childs
      this.mixNodes(this.root.children[1], this.root.children[0]);
      this.root = this.root.children[0];
    }
    let actual = this.root;
    let nodeWithKey = null;
    // Find the node that contains the value
    while (!nodeWithKey && actual) {
      if (actual.values.includes(parseInt(value))) {
        nodeWithKey = actual;
      } else {
        // Search in the childs
        if (actual.leaf) {
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
    this.deleteFromNode(nodeWithKey, parseInt(value));
  }

  /**
   * Delete a value from a node
   * @param {BTreeNode} node 
   * @param {number} value 
   */
  deleteFromNode(node, value) {
    if (node.leaf && node.n > this.order - 1) {
      node.removeValue(node.values.indexOf(value));
      return;
    }
    if (node.n <= this.order - 1 && node.parent) {
      // Leaf with not enough values to delete
      // Get immediate brother with extra keys or the next one to mix with
      const brother = node.getImmediateBrother();
      if (brother.n > this.order - 1) {
        this.transferValue(brother, node);
      } else {
        this.mixNodes(brother, node);
      }
      if (!this.root.n) {
        this.root = this.root.children[0];
      }
      return this.deleteFromNode(node, value);
    }
    // Internal node with enough values to delete
    const index = node.values.indexOf(value);
    if (node.children[index].n > this.order - 1) {
      this.transferValue(node.children[index], node.children[index + 1]);
      return this.deleteFromNode(node.children[index + 1], value);
    }
    if (node.children[index + 1].n > this.order - 1) {
      this.transferValue(node.children[index + 1], node.children[index]);
    } else {
      this.mixNodes(node.children[index + 1], node.children[index]);
    }
    return this.deleteFromNode(node.children[index], value);
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
      const valuesFrame = [target.parent.values[indexo], origin.values[origin.n-1]];
      target.addValue(target.parent.removeValue(indexo));
      origin.parent.addValue(origin.removeValue(origin.n-1));
      if (!origin.leaf) {
        target.addChild(origin.deleteChild(origin.children.length-1), 0);
      }
    } else {
      const valuesFrame = [target.parent.values[indext], origin.values[0]];
      target.addValue(target.parent.removeValue(indext));
      origin.parent.addValue(origin.removeValue(0));
      if (!origin.leaf) {
        target.addChild(origin.deleteChild(0), target.children.length);
      }
    }
  }

  /**
   * Mix 2 nodes into one
   * @param {BTreeNode} origin 
   * @param {BTreeNode} target 
  */
  mixNodes(origin, target) {
    const indexo = origin.parent.children.indexOf(origin);
    const indext = target.parent.children.indexOf(target);
    target.addValue(target.parent.removeValue(Math.min(indexo, indext)));
    for (let i = origin.n - 1; i >= 0; i--) {
      target.addValue(origin.removeValue(i));
    }
    target.parent.deleteChild(indexo);
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
      const temp = new BTreeNode(false);
      temp.tree = this.root.tree;
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
    // Create a new child for the parent
    // Trasspass values from the old child to the new
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
    // Add traspassed value to parent
    const parentValue = child.removeValue(this.order - 1);
    parent.addValue(parentValue);
    // Highlight the splitted nodes
    const values = [];
    values.push(...child.values);
    values.push(...newChild.values);
    values.push(parentValue);
    parent.leaf = false;
  }

  /**
   * Insert a value in a not-full node
   * @param {BTreeNode} node 
   * @param {number} value
   */
  insertNonFull(node, value) {
    let temp = node.n;
    if (node.leaf) {
      node.addValue(value);
    } else {
      while (temp >= 1 && value < node.values[temp - 1]) {
        // Insert frame for each value compared
        temp = temp - 1;
      }
      // Highlight next node
      if (node.children[temp].n === 2 * this.order - 1) {
        this.split(node.children[temp], node, temp + 1);
        if (value  > node.values[temp]) {
          temp = temp + 1;
        }
      }
      this.insertNonFull(node.children[temp], value);
    }
  }        
    
}
