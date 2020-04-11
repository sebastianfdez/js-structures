import expect from 'expect.js';
import { makeMinimalHeightTree } from './make-minimal-height-tree';
import { listOfDepths } from './list-of-depths';
import { linkedListtoList } from '../../../shared/classes/single-linked-list';
import { BinarySearchTree } from '../../../shared/classes/binary-search-tree';
import { generateAutoTree } from '../../../shared/functions/generate-auto-tree';
import { BinaryTree } from '../../../shared/classes/binary-tree';

describe('Exercises (Trees): Make a Linked list for every depth in a tree', function() {
  const testCases = [
    {
      tree: [0],
      expected: [[0]],
    },
    {
      tree: [0, 1],
      expected: [[0], [1]],
    },
    {
      tree: [0, 1, 2, 3, 4, 5, 6],
      expected: [[3], [1,5], [0,2,4,6]],
    },
  ];
  /**
   * 
   * @param {BinaryTree} tree 
   * @param {number[][]} expected 
   */
  function verify(tree, expected) {
    const listLinkedList = listOfDepths(tree);
    const answer = listLinkedList.map(ll => linkedListtoList(ll));
    expect(answer).to.be.eql(expected);
  }
  it (`Verify if list of depths is created correctly for every balanced tree: (${testCases.length} tests)`, function() {
    testCases.forEach((args) => {
      const tree = makeMinimalHeightTree(args.tree);
      verify(tree, args.expected)
    })
  });
  const testCases2 = [
    {
      tree: [0],
      expected: [[0]],
    },
    {
      tree: [0, 1],
      expected: [[0], [1]],
    },
    {
      tree: [0, 1, 2, 3, 4, 5, 6],
      expected: [[0], [1], [2], [3], [4], [5], [6]],
    },
    {
      tree: [10, 1, 4, 16, 8, 9, 0],
      expected: [[10], [1, 16], [0, 4], [8], [9]],
    },
    {
      tree: [10, 11, 12, 13, 9, 8, 7],
      expected: [[10],[9, 11],[8, 12],[7, 13]],
    }
  ];
  it (`Verify if list of depths is created correctly with search trees: (${testCases2.length} tests)`, function() {
    testCases2.forEach((args) => {
      const tree = new BinarySearchTree();
      args.tree.forEach((value) => tree.add(value));
      verify(tree, args.expected);
    })
  });
  it (`Verify if list of depths is created correctly with custom tree`, function() {
    const tree = new BinarySearchTree();
    const expected = [];
    tree.add(100);
    expected.push([100]);
    verify(tree, expected);
    let newNodes = [50, 150];
    newNodes.forEach((v) => tree.add(v));
    expected.push(newNodes);
    verify(tree, expected);
    newNodes = [25, 75, 125, 175];
    newNodes.forEach((v) => tree.add(v));
    expected.push(newNodes);
    verify(tree, expected);
    newNodes = [12, 32, 66, 84, 111, 134, 159, 187];
    newNodes.forEach((v) => tree.add(v));
    expected.push(newNodes);
    verify(tree, expected);
  });
  it (`Verify if list of depths is created correctly with automatically created tree`, function() {
    const expected = [];
    const tree = generateAutoTree(10000, expected);
    verify(tree, expected);
  });
});
