import { DoubleLinkedList } from "./double-linked-list";

/**
 * Custom Queue implementation
*/
export class Queue {
  constructor() {
    this.queue = new DoubleLinkedList();
  }

  /**
   * Add an element at the beginning of the Queue
   * @param {object} element Element to add in the Queue
  */
  add(element) {
    return this.queue.addFirst(element).value;
  }
  /**
   * Delete the last element of the Queue
   * @return {object} element Deleted element form the Queue
  */
  remove() {
    return this.queue.removeLast().value;
  }

  /**
   * @return {number} Size of the Queue
   */
  get size() {
    return this.queue.size;
  }
}