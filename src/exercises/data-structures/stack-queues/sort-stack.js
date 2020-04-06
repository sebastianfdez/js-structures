
/**
 * Sort a stack
 * @param {Number[]} stack Stack of numbers to sort
 * @returns {Number[]}
 */
export function sortStack(stack) {
  const sortedStack = [];
  const tempStack = [];
  while (stack.length) {
    const temp = stack.pop();
    while (sortedStack.length && temp > sortedStack[sortedStack.length - 1]) {
      tempStack.push(sortedStack.pop());
    }
    sortedStack.push(temp);
    while (tempStack.length) {
      sortedStack.push(tempStack.pop());
    }
  }
  return sortedStack;
}
