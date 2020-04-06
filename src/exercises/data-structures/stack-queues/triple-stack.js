/**
 * Three in One: Describe how you could use a single array to implement three stacks
 */

export class TripleStack {
  constructor() {
    this.sizes = [0, 0, 0];
    this.stacks = [];
  }

  /**
   * Push an element in one of the three Stacks. O(1)
   * @param {object} element  Element to push in the Stack
   * @param {number} stack    Selected stack (0, 1, 2)
   */
  push(element, stack) {
    this.stacks[this.sizes[stack] * 3 + stack] = element;
    this.sizes[stack]++;
  }

  /**
   * Return and delete last object of one of the stacks. O(1)
   * @param {number} stack    Selected stack (0, 1, 2)
   * @returns last object of the selected stack
   */
  pop(stack) {
    const element = this.stacks[(this.sizes[stack] - 1) * 3 + stack];
    this.stacks[(this.sizes[stack] - 1) * 3 + stack] = null;
    this.sizes[stack]--;
    // Clean stack from nulls
    this.stacks = this.stacks.slice(0, Math.max(...this.sizes) * 3);
    return element;
  }

  /**
   * Return the lenght of the selected stack. O(1)
   * @param {number} stack    Selected stack (0, 1, 2)
   * @returns lenght of the selected stack
   */
  length(stack) {
    return this.sizes[stack];
  }

  /**
   * Return a Stack. O(N)
   * @param {number} stack    Selected stack (0, 1, 2)
   * @return {Array}          Selected stack
   */
  getStack(stack) {
    const stack_ = [];
    for (let i = 0; i < this.sizes[stack]; i++) {
      stack_.push(this.stacks[i * 3 + stack]);
    }
    return stack_;
  }
}
