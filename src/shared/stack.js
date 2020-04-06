/**
 * Custom Stack implementation
*/
export class Stack {
  constructor() {
    this.stack = [];
  }

  /**
   * 
   * @param {object} element Element to push in the Stack
   */
  push(element) {
    this.stack.push(element);
    return this;
  }

  /**
   * Return and delete last object of the stack
   * @returns last object of the stack
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * Return the lenght of the stack
   * @returns lenght of the stack
   */
  get length() {
    return this.stack.length;
  }
}