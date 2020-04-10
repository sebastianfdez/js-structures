export class MinHeapNode {
  contructor(val) {
    this.val = val;
    this.right = this.left = null;
    this.parent = null;
  }
}

export class MinHeap {
  /**
   * To create a MinHeap, give the head reference
   * @param {MinHeapNode} head Head of tree
   */
  constructor(head) {
    this.head = head;
    this.last = head;
  }
}