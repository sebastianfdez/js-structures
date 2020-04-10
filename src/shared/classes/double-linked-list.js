export class DoubleListNode {
  constructor(value) {
    /** @type {object} value of the node */
    this.value = value;
    /** @type {DoubleListNode} next node of the list */
    this.next = null;
    /** @type {DoubleListNode} previous node of the list */
    this.previous = null;
  }
}

export class DoubleLinkedList {
  constructor() {
    /** @type {DoubleListNode} first node */
    this.first = null; // head/root element
    /** @type {DoubleListNode} last node */
    this.last = null; // last element of the list
    this.size = 0; // total number of elements in the list
  }

  /**
   * Add a value in the head of the Linked List
   * @param {object} value Value to add in the head
   * @returns {DoubleListNode}     Reference to the added node
   */
  addFirst(value) {
    const node = new DoubleListNode(value);
    node.next = this.first;
    if (this.first) {
      this.first.previous = node;
    } else {
      this.last = node;
    }
    this.first = node; // update head
    this.size++;
    return node;
  }
  /**
   * Remove head of the Linked List
   * @returns {DoubleListNode}     Reference to the removed node
   */
  removeFirst() {
    const first = this.first;
    if (first) {
      this.first = first.next;
      if(this.first) {
        this.first.previous = null;
      }
      this.size--;
      return first;
    }
    this.last = null;
    return null;
  }
  /**
   * Add a value in the end of the Linked List
   * @param {object} value Value to add at the end
   * @returns {DoubleListNode}     Reference to the added node
   */
  addLast(value) {
    const last = new DoubleListNode(value);
    if (this.last) {
      this.last.next = last;
      last.previous = this.last;
      this.last = last;
    } else {
      this.first = last;
      this.last = last;
    }
    this.size++;
    return this.last;
  }
  /**
   * Remove last node of the Linked List
   * @returns {DoubleListNode}  Reference to the removed node
   */
  removeLast() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      const last = this.last
      this.first = null;
      this.last = null;
      this.size--;
      return last;
    }
    const last = this.last;
    this.last = this.last.previous;
    this.last.next = null;
    this.size--;
    return last;
  }

  /**
   * Add element anywhere in the linked List. O(N)
   * @param {object} value Value to add
   * @param {DoubleListNode} index Position to add
   */
  add(value, index = 0) {
    const node = new DoubleListNode(value);
    if (index === 0) {
      return this.addFirst(value);
    }
    if (index === this.size) {
      return this.addLast(value);
    }
    for (let current = this.first, i = 0; current; current = current.next, i++) {
      if (index === i) {
        node.previous = current.previous;
        node.previous.next = node;
        node.next = current;
        current.previous = node;
        this.size++;
        return node;
      }
    }
    // The index was too high and was never added
    // We can return an error or push it at the end
    if (!node.next) {
      // return Error
      return this.addLast(value);
    }
  }
}