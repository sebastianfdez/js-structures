export class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

export class DoubleLinkedList {
  constructor() {
    this.first = null; // head/root element
    this.last = null; // last element of the list
    this.size = 0; // total number of elements in the list
  }

  /**
   * Add a value in the head of the Linked List
   * @param {object} value Value to add in the head
   * @returns {ListNode}     Reference to the added node
   */
  addFirst(value) {
    const node = new ListNode(value);
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
   * @returns {ListNode}     Reference to the removed node
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
   * @returns {ListNode}     Reference to the added node
   */
  addLast(value) {
    const last = new ListNode(value);
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
   * @returns {ListNode}  Reference to the removed node
   */
  removeLast() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size--;
      return null;
    }
    this.last = this.last.previous;
    this.last.next = null;
    this.size--;
    return this.last;
  }

  /**
   * Add element anywhere in the linked List. O(N)
   * @param {object} value Value to add
   * @param {ListNode} index Position to add
   */
  add(value, index = 0) {
    const node = new ListNode(value);
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