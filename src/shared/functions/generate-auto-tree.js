import { BinarySearchTree } from "../classes/binary-search-tree";

/**
 * Generate a balanced search tree with a first value.
 * Fill the tree the maximum as possible
 * @param {number} value 
 * @param {number[]} expected
 * @return {BinarySearchTree} 
 */
export function generateAutoTree(value, expected = null) {
  const tree = new BinarySearchTree();
  tree.add(value);
  if (expected) {
    expected.push([value]);
  }
  let actual = [[0, value - 1], [value + 1, 2*value]];
  while (actual[0][1] > actual[0][0]) {
    const next = [];
    const newexpected = [];
    actual.forEach((range) => {
      const middle = range[0] + Math.floor((range[1] - range[0])/2);
      next.push([range[0], middle - 1], [middle + 1, range[1]]);
      tree.add(middle);
      newexpected.push(middle);
    });
    if (expected) {
      expected.push(newexpected);
    }
    actual = next;
  }
  return tree;
}
