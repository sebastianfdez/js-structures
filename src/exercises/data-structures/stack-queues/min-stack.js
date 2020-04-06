import { Stack } from "../../../shared/stack";

export class StackWithMin extends Stack {
  constructor() {
    super();
  }
  /**
   * Return the minimum value of the Stack
   * @return {number}
   */
  getMin() {
    if (this.length === 0) {
      return null;
    }
    return this.stack[this.length - 1][1];
  }

  /**
   * Push the element with the minimum object to the stack
   * @param {object} element Element to push to the StackWithMin
   */
  push(element) {
    if (this.length === 0 || element < this.getMin()) {
      return super.push([element, element]);
    }
    return super.push([element, this.getMin()]);
  }

  /**
   * Return last object of the stack
   * @return {object}
   */
  pop() {
    return super.pop()[0];
  }
}